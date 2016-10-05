using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhotoGalleryBackendService.Models
{
    public class PhotoGallery
    {
        public int Id { get; set; }
        [ForeignKey("App")]
        public int? AppId { get; set; }
        public App App { get; set; }
        public string Name { get; set; }
        public ICollection<PhotoGalleryDigitalAsset> PhotoGalleryDigitalAssets { get; set; } = new HashSet<PhotoGalleryDigitalAsset>();
        public bool IsDeleted { get; set; }
    }
}
