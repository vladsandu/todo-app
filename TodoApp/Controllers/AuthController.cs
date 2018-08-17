using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TodoApp.DTO;
using TodoApp.Options;
using TodoApp.Services;

namespace TodoApp.Controllers
{
    [Route("api/[controller]"), AllowAnonymous]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        private readonly IOptions<AppOptions> _appOptions;

        public AuthController(IAuthService authService, IOptions<AppOptions> appOptions)
        {
            _authService = authService;
            _appOptions = appOptions;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]UserDto user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if (!_authService.AreCredentialsValid(user)) return Unauthorized();

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appOptions.Value.JwtSecretKey));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(
                issuer: _appOptions.Value.AppDns,
                audience: _appOptions.Value.AppDns,
                claims: new List<Claim>(),
                expires: DateTime.Now.AddDays(1),
                signingCredentials: signinCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new { Token = tokenString });
        }

        [HttpPost, Route("register")]
        public IActionResult Register([FromBody]UserDto user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            _authService.Register(user);
            return Ok();
        }
    }
}
