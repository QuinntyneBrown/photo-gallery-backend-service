using System;
using System.Collections.Generic;
using PhotoGalleryBackendService.Dtos;
using PhotoGalleryBackendService.Data;
using System.Linq;

namespace PhotoGalleryBackendService.Services
{
    public class PhotoGalleryService : IPhotoGalleryService
    {
        public PhotoGalleryService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.PhotoGalleries;
            _cache = cacheProvider.GetCache();
        }

        public PhotoGalleryAddOrUpdateResponseDto AddOrUpdate(PhotoGalleryAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.PhotoGallery());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new PhotoGalleryAddOrUpdateResponseDto(entity);
        }

        public ICollection<PhotoGalleryDto> Get()
        {
            ICollection<PhotoGalleryDto> response = new HashSet<PhotoGalleryDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new PhotoGalleryDto(entity)); }
            return response;
        }

        public PhotoGalleryDto GetById(int id)
        {
            return new PhotoGalleryDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.PhotoGallery> _repository;
        protected readonly ICache _cache;
    }
}
