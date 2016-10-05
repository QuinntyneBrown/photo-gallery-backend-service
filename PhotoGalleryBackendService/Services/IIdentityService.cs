using PhotoGalleryBackendService.Dtos;
using System.Collections.Generic;
using System.Security.Claims;

namespace PhotoGalleryBackendService.Services
{
    public interface IIdentityService
    {

        TokenDto TryToRegister(RegistrationRequestDto registrationRequestDto);

        bool AuthenticateUser(string username, string password);

        ICollection<Claim> GetClaimsForUser(string username);
    }
}
