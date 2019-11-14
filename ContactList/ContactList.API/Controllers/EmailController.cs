using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers
{
    [Route("contact-list")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            this._emailService = emailService;
        }

        [HttpDelete("DeleteEmail")]
        public IActionResult Delete(Email obj)
        {
            try
            {
                _emailService.Delete(obj);
                return new ObjectResult(obj.Id);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex);
            }
        }
    }
}