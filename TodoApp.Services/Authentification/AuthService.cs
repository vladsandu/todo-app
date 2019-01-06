using AutoMapper;
using System;
using System.Linq;
using TodoApp.DataAccess;
using TodoApp.DTO;
using TodoApp.Entity;

namespace TodoApp.Services.Authentification
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _dbContext;

        public AuthService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool AreCredentialsValid(UserDto userDto)
        {
            var encryptedPassword = CryptographyUtils.EncryptPassword(userDto.Password);
            return (from u in _dbContext.User
                    where string.Equals(u.Email, userDto.Email, StringComparison.CurrentCultureIgnoreCase)
                          && u.EncryptedPassword == encryptedPassword
                    select true).FirstOrDefault();
        }

        public void Register(UserDto userDto)
        {
            var user = new User
            {
                Email = userDto.Email,
                EncryptedPassword = CryptographyUtils.EncryptPassword(userDto.Password),
            };

            _dbContext.User.Add(user);
            _dbContext.SaveChanges();
        }
    }
}
