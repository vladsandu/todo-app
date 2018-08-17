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
            var user = Mapper.Map<UserDto, User>(userDto);
            return (from u in _dbContext.User
                    where string.Equals(u.Email, user.Email, StringComparison.CurrentCultureIgnoreCase)
                          && u.EncryptedPassword == user.EncryptedPassword
                    select true).FirstOrDefault();
        }

        public void Register(UserDto userDto)
        {
            var user = Mapper.Map<UserDto, User>(userDto);
            _dbContext.User.Add(user);
            _dbContext.SaveChanges();
        }
    }
}
