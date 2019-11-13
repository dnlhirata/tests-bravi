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
    public class PhoneController : ControllerBase
    {
        private readonly IPhoneService _phoneService;

        public PhoneController(IPhoneService phoneService)
        {
            this._phoneService = phoneService;
        }

        [HttpDelete("DeletePhone")]
        public IActionResult Delete(Phone obj)
        {
            try
            {
                _phoneService.Delete(obj);
                return new ObjectResult(obj.Id);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex);
            }
        }
    }
}