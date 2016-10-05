using System.Collections.Generic;

namespace PhotoGalleryBackendService.Models
{
    public class App
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<PhotoGallery> PhotoGalleries = new HashSet<PhotoGallery>();
        public bool IsDeleted { get; set; }
    }
}
