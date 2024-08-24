using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title="This is a bad Request"});
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized("This is bad request");
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the seconds error");

            return ValidationProblem();
        }

         [HttpGet("server-error")]
        public ActionResult GetServerError()
        {           
           throw new Exception("This is server error");
        }

    }
}