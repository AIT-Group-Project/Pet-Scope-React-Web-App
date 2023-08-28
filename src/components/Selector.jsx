import React from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const dogbreeds = [
  {id: 1, name: 'Cavapoo'},
  {id: 2, name: 'Golden Retriever'},
  {id: 3, name: 'French Bulldog'},
  {id: 4, name: 'Labrador Retriever'},
  {id: 5, name: 'Miniature Dachshund'},
  {id: 6, name: 'Maltese'},
  {id: 7, name: 'Staffordshire Bull Terrier'},
  {id: 8, name: 'Border Collie'},
  {id: 9, name: 'German Shpeherd'},
  {id: 10, name: 'Goldendoodle'},
]

function Selector() {
  const [selectedPerson, setSelectedPerson] = useState(dogbreeds[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {dogbreeds.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            <CheckIcon className="hidden ui-selected:block" />
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}













export default Selector

