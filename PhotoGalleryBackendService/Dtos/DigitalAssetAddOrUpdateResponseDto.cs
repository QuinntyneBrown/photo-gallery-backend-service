namespace PhotoGalleryBackendService.Dtos
{
    public class DigitalAssetAddOrUpdateResponseDto: DigitalAssetDto
    {
        public DigitalAssetAddOrUpdateResponseDto(PhotoGalleryBackendService.Models.DigitalAsset entity)
            :base(entity)
        {

        }
    }
}
