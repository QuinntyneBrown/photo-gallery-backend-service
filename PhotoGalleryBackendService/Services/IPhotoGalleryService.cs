using PhotoGalleryBackendService.Dtos;
using System.Collections.Generic;

namespace PhotoGalleryBackendService.Services
{
    public interface IPhotoGalleryService
    {
        PhotoGalleryAddOrUpdateResponseDto AddOrUpdate(PhotoGalleryAddOrUpdateRequestDto request);
        ICollection<PhotoGalleryDto> Get();
        PhotoGalleryDto GetById(int id);
        dynamic Remove(int id);
    }
}
