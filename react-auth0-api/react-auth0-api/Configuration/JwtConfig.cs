using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace react_auth0_api.Configuration
{
    public static class JwtConfig
    {
        public static IServiceCollection ConfigureJwt(this IServiceCollection services, IConfiguration config)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options => 
            {
                options.Authority = "https://s-grouios-dev.au.auth0.com/";
                options.Audience = "http://localhost:4200";
            });
            return services;
        }
    }
}
