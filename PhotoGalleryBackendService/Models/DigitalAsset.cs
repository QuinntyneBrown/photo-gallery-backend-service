using System;
using System.Collections.Generic;

namespace PhotoGalleryBackendService.Models
{
    public class DigitalAsset
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        public string Description { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? FileModified { get; set; }
        public long? Size { get; set; }
        public string ContentType { get; set; }
        public string RelativePath { get { return $"api/digitalasset/serve?uniqueid={UniqueId}"; } }
        public Byte[] Bytes { get; set; } = new byte[0];
        public Guid? UniqueId { get; set; } = Guid.NewGuid();
        public ICollection<PhotoGalleryDigitalAsset> PhotoGalleryDigitalAssets { get; set; } = new HashSet<PhotoGalleryDigitalAsset>();
        public bool IsDeleted { get; set; }
    }
}
