using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace react_auth0_api.Configuration
{
    public static class OptionsRegistration
    {
        public static void RegisterOptions(this IServiceCollection services, IConfiguration config)
        {
            services.AddOptions<Auth0Options>()
                .Bind(config.GetSection(Auth0Options.ParentKey))
                .ValidateDataAnnotations();
        }
    }
}
