using PhotoGalleryBackendService.Dtos;
using PhotoGalleryBackendService.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace PhotoGalleryBackendService.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/photoGallery")]
    public class PhotoGalleryController : ApiController
    {
        public PhotoGalleryController(IPhotoGalleryService photoGalleryService)
        {
            _photoGalleryService = photoGalleryService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(PhotoGalleryAddOrUpdateResponseDto))]
        public IHttpActionResult Add(PhotoGalleryAddOrUpdateRequestDto dto) { return Ok(_photoGalleryService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(PhotoGalleryAddOrUpdateResponseDto))]
        public IHttpActionResult Update(PhotoGalleryAddOrUpdateRequestDto dto) { return Ok(_photoGalleryService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<PhotoGalleryDto>))]
        public IHttpActionResult Get() { return Ok(_photoGalleryService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(PhotoGalleryDto))]
        public IHttpActionResult GetById(int id) { return Ok(_photoGalleryService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_photoGalleryService.Remove(id)); }

        protected readonly IPhotoGalleryService _photoGalleryService;
    }
}
