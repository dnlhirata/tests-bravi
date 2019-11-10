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

        
        [HttpPost("Adicionar")]
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

        [HttpGet("Contact/{id}")]
        public IActionResult Get(long id)
        {
            try
            {
                return new ObjectResult(_personService.GetById(id));
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("GetAllContacts")]
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

        [HttpPut("UpdateContact")]
        public IActionResult Put(Person obj)
        {
            try
            {
                _personService.Update(obj);
                return new ObjectResult(obj.Id);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("DeleteContact")]
        public IActionResult Delete(Person obj)
        {
            try
            {
                _personService.Delete(obj);
                return new ObjectResult(obj.Id);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex);
            }
        }
    }
}