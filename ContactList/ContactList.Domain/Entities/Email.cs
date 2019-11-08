using System;
using System.Collections.Generic;
using System.Text;

namespace ContactList.Domain.Entities
{
    public class Email : BaseEntity
    {
        public string EmailAddress { get; set; }
    }
}
