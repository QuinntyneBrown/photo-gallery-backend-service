using System;
using System.Collections.Generic;
using PhotoGalleryBackendService.Data;
using PhotoGalleryBackendService.Dtos;
using System.Linq;
using PhotoGalleryBackendService.Models;
using System.Net.Http;
using PhotoGalleryBackendService.UploadHandlers;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Web.Http;
using System.Threading.Tasks;

namespace PhotoGalleryBackendService.Services
{
    public class DigitalAssetService : IDigitalAssetService
    {
        public DigitalAssetService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.DigitalAssets;
            _cache = cacheProvider.GetCache();
        }

        public DigitalAssetAddOrUpdateResponseDto AddOrUpdate(DigitalAssetAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new DigitalAsset());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new DigitalAssetAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        public ICollection<DigitalAssetDto> Get()
        {
            ICollection<DigitalAssetDto> response = new HashSet<DigitalAssetDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new DigitalAssetDto(entity)); }    
            return response;
        }

        public async Task<DigitalAssetUploadResponseDto> Upload(HttpRequestMessage request) {
            var digitalAssets = new List<DigitalAsset>();
            InMemoryMultipartFormDataStreamProvider provider = null;
            try
            {
                if (!request.Content.IsMimeMultipartContent("form-data"))
                    throw new HttpResponseException(HttpStatusCode.BadRequest);
                provider = await request.Content.ReadAsMultipartAsync(new InMemoryMultipartFormDataStreamProvider());                
            }
            catch
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return await Upload(provider.FormData, provider.Files);
        }


        public async Task<DigitalAssetUploadResponseDto> Upload(NameValueCollection formData, IList<HttpContent> files) {

            var digitalAssets = new List<DigitalAsset>();

            foreach (var file in files)
            {
                var filename = new FileInfo(file.Headers.ContentDisposition.FileName.Trim(new char[] { '"' })
                    .Replace("&", "and")).Name;
                Stream stream = await file.ReadAsStreamAsync();
                var bytes = StreamHelper.ReadToEnd(stream);
                var digitalAsset = new DigitalAsset();
                digitalAsset.FileName = filename;
                digitalAsset.Bytes = bytes;
                digitalAsset.ContentType = System.Convert.ToString(file.Headers.ContentType);
                _repository.Add(digitalAsset);
                digitalAssets.Add(digitalAsset);
            }

            _uow.SaveChanges();
        
            return new DigitalAssetUploadResponseDto(digitalAssets);
        }

        public DigitalAssetDto GetById(int id)
        {
            return new DigitalAssetDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow _uow;
        protected readonly IRepository<DigitalAsset> _repository;
        protected readonly ICache _cache;
    }
}
