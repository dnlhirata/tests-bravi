using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactList.Domain.Entities;
using ContactList.Domain.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers
{
    [EnableCors("AllowSpecificOrigin")]
    [Route("contact-list")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;
        private readonly IPhoneService _phoneService;
        private readonly IEmailService _emailService;

        public PersonController(IPersonService personService, IPhoneService phoneService, IEmailService emailService)
        {
            this._personService = personService;
            this._phoneService = phoneService;
            this._emailService = emailService;
        }

        
        [HttpPost("adicionar")]
        public IActionResult Post([FromBody] Person person)
        {
            try
            {
                _personService.Insert(person);
                return new ObjectResult(person.Id);
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return new ObjectResult(_personService.GetAll());
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex);
            }
        }
    }
}