namespace PhotoGalleryBackendService.Dtos
{
    public class PhotoGalleryDto
    {
        public PhotoGalleryDto()
        {

        }

        public PhotoGalleryDto(Models.PhotoGallery entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
