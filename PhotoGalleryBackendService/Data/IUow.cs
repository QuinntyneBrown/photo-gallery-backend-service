using PhotoGalleryBackendService.Models;

namespace PhotoGalleryBackendService.Data
{
    public interface IUow
    {
        IRepository<PhotoGallery> PhotoGalleries { get; }
        IRepository<DigitalAsset> DigitalAssets { get; }
        IRepository<App> Apps { get; }
        void SaveChanges();
    }
}
