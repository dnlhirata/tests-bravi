using System;
using System.Collections.Generic;
using System.Text;
using ContactList.Domain.Entities;

namespace ContactList.Domain.Interfaces
{
    public interface IPersonRepository
    {
        void Add(Person obj);
        void Update(Person obj);
        void Remove(Person obj);
        Person GetById(long id);
        IEnumerable<Person> GetByName(string name);
        IEnumerable<Person> GetAll();
        
    }
}
