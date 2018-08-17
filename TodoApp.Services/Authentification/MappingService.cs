using AutoMapper;
using TodoApp.DTO;
using TodoApp.Entity;

namespace TodoApp.Services.Authentification
{
    public static class MappingService
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<UserDto, User>().ConvertUsing<UserConvertor>());
        }
    }

    public class UserConvertor : ITypeConverter<UserDto, User>
    {
        public User Convert(UserDto source, User destination, ResolutionContext context)
        {
            return new User
            {
                UserId = 0,
                Email = source.Email,
                EncryptedPassword = CryptographyUtils.EncryptPassword(source.Password)
            };
        }
    }
}
