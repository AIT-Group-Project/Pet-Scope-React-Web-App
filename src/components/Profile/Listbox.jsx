import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Listbox extends React.Component {
    //Dog or cat
    TypeObj;
    //Breed
    BreedObj;
    //Age
    AgeObj;
    //Drop Down data
    TypeData = [
        { TypeName: 'Dog', TypeId: '2'},
        { TypeName: 'Cat', TypeId: '1'},
    ];
    //define Breeds
    BreedData = [
        {BreedName: 'cavapoo', TypeId: '2', BreedId: '102'},
        {BreedName: 'German Shepherd', TypeId: '2', BreedId: '102'},
        {BreedName: 'Golden Retriever', TypeId: '2', BreedId: '102'},
        {BreedName: 'French Bulldog', TypeId: '2', BreedId: '102'},
        {BreedName: 'Labrador Retriever', TypeId: '2', BreedId: '102'},
        {BreedName: 'Staffordshire Bull Terrier', TypeId: '2', BreedId: '102'},
        {BreedName: 'Siamese cat', TypeId: '1', BreedId: '102'},
        {BreedName: 'Britch Shorthair', TypeId: '1', BreedId: '102'},
        {BreedName: 'Maine coon', TypeId: '1', BreedId: '102'},
        {BreedName: 'Ragdoll', TypeId: '1', BreedId: '102'},
        {BreedName: 'American Shorthair', TypeId: '1', BreedId: '102'},
    ];
    //Define age
    AgeData = [
        {}
    ]

}
