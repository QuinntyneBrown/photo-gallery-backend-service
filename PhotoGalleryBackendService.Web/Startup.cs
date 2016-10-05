using Owin;
using System.Web.Http;
using Microsoft.Owin;
using Unity.WebApi;
using static PhotoGalleryBackendService.ApiConfiguration;

[assembly: OwinStartup(typeof(PhotoGalleryBackendService.Web.Startup))]

namespace PhotoGalleryBackendService.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {            
            GlobalConfiguration.Configure(config =>
            {
                config.DependencyResolver = new UnityDependencyResolver(UnityConfiguration.GetContainer());
                Install(config, app);
            });
        }
    }
}
