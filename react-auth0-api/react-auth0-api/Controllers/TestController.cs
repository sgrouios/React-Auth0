using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace react_auth0_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> TestEndpoint([FromHeader] string authorization)
        {
            return Ok(authorization);
        }
    }
}
