namespace PhotoGalleryBackendService.Dtos
{
    public class PhotoGalleryAddOrUpdateResponseDto: PhotoGalleryDto
    {
        public PhotoGalleryAddOrUpdateResponseDto(Models.PhotoGallery entity)
        :base(entity)
        {

        }
    }
}
