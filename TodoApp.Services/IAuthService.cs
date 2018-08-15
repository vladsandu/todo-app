namespace TodoApp.Services {
    public interface IAuthService {
        bool AreCredentialsValid(string email, string password);
    }
}