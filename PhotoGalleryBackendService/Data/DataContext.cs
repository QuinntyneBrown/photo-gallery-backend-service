using PhotoGalleryBackendService.Models;
using System.Data.Entity;

namespace PhotoGalleryBackendService.Data
{
    public class DataContext: DbContext, IDbContext
    {
        public DataContext()
            : base(nameOrConnectionString: "PhotoGalleryBackendServiceDataContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<PhotoGallery> PhotoGalleries { get; set; }
        public DbSet<DigitalAsset> DigitalAssets { get; set; }
        public DbSet<App> Apps { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        } 
    }
}
