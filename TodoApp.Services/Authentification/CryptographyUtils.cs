using System.Security.Cryptography;
using System.Text;

namespace TodoApp.Services.Authentification
{
    public static class CryptographyUtils
    {
        public static string EncryptPassword(string password)
        {
            var data = Encoding.ASCII.GetBytes(password);
            data = new SHA256Managed().ComputeHash(data);
            return Encoding.ASCII.GetString(data);
        }
    }
}