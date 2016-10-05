using System.ComponentModel.DataAnnotations.Schema;

namespace PhotoGalleryBackendService.Models
{
    public class PhotoGalleryDigitalAsset
    {
        public int Id { get; set; }
        [ForeignKey("PhotoGallery")]
        public int? PhotoGalleryId { get; set; }
        [ForeignKey("DigitalAsset")]
        public int? DigitalAssetId { get; set; }
        public PhotoGallery PhotoGallery { get; set; }
        public DigitalAsset DigitalAsset { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
    }
}
