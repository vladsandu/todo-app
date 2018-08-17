using TodoApp.DTO;

namespace TodoApp.Services
{
    public interface IAuthService
    {
        bool AreCredentialsValid(UserDto user);
        void Register(UserDto user);
    }
}