// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { FindAddressByIdData, FindAddressByIdResponse, FindAllAddressesResponse, CreateAddressData, CreateAddressResponse, GetContactPersonMappingsData, GetContactPersonMappingsResponse, CreateContactPersonMappingData, CreateContactPersonMappingResponse, DeleteContactInformationMappingData, DeleteContactInformationMappingResponse, GetContactInformationMappingsData, GetContactInformationMappingsResponse, CreateContactInformationMappingData, CreateContactInformationMappingResponse, DeleteContactPersonMappingData, DeleteContactPersonMappingResponse, CreateContactInformationData, CreateContactInformationResponse, FindByIdData, FindByIdResponse, UpdateContactInformationData, UpdateContactInformationResponse, DeleteContactInformationData, DeleteContactInformationResponse, FindByAddressData, FindByAddressResponse, FindByPersonData, FindByPersonResponse, FindAllPersonsResponse, CreatePersonData, CreatePersonResponse, FindPersonData, FindPersonResponse, UpdatePersonData, UpdatePersonResponse, FindAllReligionsResponse, FindAllGroupsResponse, FindGroupMembersByIdData, FindGroupMembersByIdResponse, FindGroupByIdData, FindGroupByIdResponse, FindDistrictByIdData, FindDistrictByIdResponse, FindAllDistrictsResponse, FindAllCountriesResponse, FindCountryByIdxData, FindCountryByIdxResponse, FindRelationshipsForPersonData, FindRelationshipsForPersonResponse } from './types.gen';

export class AddressService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Get address by id
     * Get address by id
     * @param data The data for the request.
     * @param data.id
     * @returns AddressDTO default response
     * @throws ApiError
     */
    public findAddressById(data: FindAddressByIdData): CancelablePromise<FindAddressByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/addresses/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Get all addresses
     * Get all addresses
     * @returns AddressDTO default response
     * @throws ApiError
     */
    public findAllAddresses(): CancelablePromise<FindAllAddressesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/addresses'
        });
    }
    
    /**
     * Create address
     * Create address
     * @param data The data for the request.
     * @param data.requestBody
     * @returns AddressDTO default response
     * @throws ApiError
     */
    public createAddress(data: CreateAddressData = {}): CancelablePromise<CreateAddressResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/addresses',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
}

export class CommunicationService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Get contact person mappings for a child
     * Get contact person mappings for a child
     * @param data The data for the request.
     * @param data.childId
     * @returns ContactPersonMappingDTO default response
     * @throws ApiError
     */
    public getContactPersonMappings(data: GetContactPersonMappingsData): CancelablePromise<GetContactPersonMappingsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/communication/child/{childId}/persons',
            path: {
                childId: data.childId
            }
        });
    }
    
    /**
     * Create contact person mapping for a child
     * Create contact person mapping for a child
     * @param data The data for the request.
     * @param data.childId
     * @param data.requestBody
     * @returns ContactPersonMappingDTO default response
     * @throws ApiError
     */
    public createContactPersonMapping(data: CreateContactPersonMappingData): CancelablePromise<CreateContactPersonMappingResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/communication/child/{childId}/persons',
            path: {
                childId: data.childId
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Delete contact information mapping for a child
     * Delete contact information mapping for a child
     * @param data The data for the request.
     * @param data.childId
     * @param data.contactInformationMappingId
     * @returns unknown default response
     * @throws ApiError
     */
    public deleteContactInformationMapping(data: DeleteContactInformationMappingData): CancelablePromise<DeleteContactInformationMappingResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/communication/child/{childId}/information/{contactInformationMappingId}',
            path: {
                childId: data.childId,
                contactInformationMappingId: data.contactInformationMappingId
            }
        });
    }
    
    /**
     * Get contact information mappings for a child
     * Get contact information mappings for a child
     * @param data The data for the request.
     * @param data.childId
     * @returns ContactInformationMappingDTO default response
     * @throws ApiError
     */
    public getContactInformationMappings(data: GetContactInformationMappingsData): CancelablePromise<GetContactInformationMappingsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/communication/child/{childId}/information',
            path: {
                childId: data.childId
            }
        });
    }
    
    /**
     * Create contact information mapping for a child
     * Create contact information mapping for a child
     * @param data The data for the request.
     * @param data.childId
     * @param data.requestBody
     * @returns ContactInformationMappingDTO default response
     * @throws ApiError
     */
    public createContactInformationMapping(data: CreateContactInformationMappingData): CancelablePromise<CreateContactInformationMappingResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/communication/child/{childId}/information',
            path: {
                childId: data.childId
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Delete contact person mapping for a child
     * Delete contact person mapping for a child
     * @param data The data for the request.
     * @param data.childId
     * @param data.contactPersonMappingId
     * @returns unknown default response
     * @throws ApiError
     */
    public deleteContactPersonMapping(data: DeleteContactPersonMappingData): CancelablePromise<DeleteContactPersonMappingResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/communication/child/{childId}/persons/{contactPersonMappingId}',
            path: {
                childId: data.childId,
                contactPersonMappingId: data.contactPersonMappingId
            }
        });
    }
    
}

export class ContactInformationService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Create
     * Create contact information
     * @param data The data for the request.
     * @param data.requestBody
     * @returns ResponseEntityObject default response
     * @throws ApiError
     */
    public createContactInformation(data: CreateContactInformationData = {}): CancelablePromise<CreateContactInformationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contactinformation',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Find by ID
     * Find contact information by id
     * @param data The data for the request.
     * @param data.contactInformationId
     * @returns ContactInformationDTO default response
     * @throws ApiError
     */
    public findById(data: FindByIdData): CancelablePromise<FindByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactinformation/{contactInformationId}',
            path: {
                contactInformationId: data.contactInformationId
            }
        });
    }
    
    /**
     * Update
     * Update contact information
     * @param data The data for the request.
     * @param data.contactInformationId
     * @param data.requestBody
     * @returns ContactInformationDTO default response
     * @throws ApiError
     */
    public updateContactInformation(data: UpdateContactInformationData): CancelablePromise<UpdateContactInformationResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/contactinformation/{contactInformationId}',
            path: {
                contactInformationId: data.contactInformationId
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Delete
     * Delete contact information
     * @param data The data for the request.
     * @param data.contactInformationId
     * @returns ResponseEntityObject default response
     * @throws ApiError
     */
    public deleteContactInformation(data: DeleteContactInformationData): CancelablePromise<DeleteContactInformationResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contactinformation/{contactInformationId}',
            path: {
                contactInformationId: data.contactInformationId
            }
        });
    }
    
    /**
     * Find by Address
     * Find contact information by address
     * @param data The data for the request.
     * @param data.addressId
     * @returns ContactInformationDTO default response
     * @throws ApiError
     */
    public findByAddress(data: FindByAddressData): CancelablePromise<FindByAddressResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactinformation/address/{addressId}',
            path: {
                addressId: data.addressId
            }
        });
    }
    
    /**
     * Find by Person
     * Find contact information by person
     * @param data The data for the request.
     * @param data.personId
     * @returns ContactInformationDTO default response
     * @throws ApiError
     */
    public findByPerson(data: FindByPersonData): CancelablePromise<FindByPersonResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactinformation/person/{personId}',
            path: {
                personId: data.personId
            }
        });
    }
    
}

export class PersonService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Find all
     * Find all persons.
     * @returns PersonDTO default response
     * @throws ApiError
     */
    public findAllPersons(): CancelablePromise<FindAllPersonsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/persons'
        });
    }
    
    /**
     * Create
     * Create a person.
     * @param data The data for the request.
     * @param data.requestBody
     * @returns SuccessResponse default response
     * @throws ApiError
     */
    public createPerson(data: CreatePersonData = {}): CancelablePromise<CreatePersonResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/persons',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Find by id
     * Find a person by id.
     * @param data The data for the request.
     * @param data.id
     * @returns PersonDTO default response
     * @throws ApiError
     */
    public findPerson(data: FindPersonData): CancelablePromise<FindPersonResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/persons/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Update
     * Update a person.
     * @param data The data for the request.
     * @param data.id
     * @param data.requestBody
     * @returns SuccessResponse default response
     * @throws ApiError
     */
    public updatePerson(data: UpdatePersonData): CancelablePromise<UpdatePersonResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/persons/{id}',
            path: {
                id: data.id
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
}

export class ReligionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Find all
     * Find all available religions
     * @returns ReligionDTO default response
     * @throws ApiError
     */
    public findAllReligions(): CancelablePromise<FindAllReligionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/religions'
        });
    }
    
}

export class GroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Find all groups
     * Find all groups
     * @returns GroupDTO default response
     * @throws ApiError
     */
    public findAllGroups(): CancelablePromise<FindAllGroupsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/groups'
        });
    }
    
    /**
     * Find group members by id
     * Find group members by id
     * @param data The data for the request.
     * @param data.id
     * @returns GroupMembershipDTO default response
     * @throws ApiError
     */
    public findGroupMembersById(data: FindGroupMembersByIdData): CancelablePromise<FindGroupMembersByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/groups/{id}/members',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Find group by id
     * Find group by id
     * @param data The data for the request.
     * @param data.id
     * @returns GroupDTO default response
     * @throws ApiError
     */
    public findGroupById(data: FindGroupByIdData): CancelablePromise<FindGroupByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/groups/{id}',
            path: {
                id: data.id
            }
        });
    }
    
}

export class DistrictsService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Get a district by ID
     * Find a specific district by ID
     * @param data The data for the request.
     * @param data.id
     * @returns DistrictDTO default response
     * @throws ApiError
     */
    public findDistrictById(data: FindDistrictByIdData): CancelablePromise<FindDistrictByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/districts/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Get all districts
     * Get all districts
     * @returns DistrictDTO default response
     * @throws ApiError
     */
    public findAllDistricts(): CancelablePromise<FindAllDistrictsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/districts'
        });
    }
    
}

export class CountriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Find all
     * Find all available countries
     * @returns CountryDTO default response
     * @throws ApiError
     */
    public findAllCountries(): CancelablePromise<FindAllCountriesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/countries'
        });
    }
    
    /**
     * Find by IDX
     * Find a country by its IDX
     * @param data The data for the request.
     * @param data.idx
     * @returns CountryDTO default response
     * @throws ApiError
     */
    public findCountryByIdx(data: FindCountryByIdxData): CancelablePromise<FindCountryByIdxResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/countries/{idx}',
            path: {
                idx: data.idx
            }
        });
    }
    
}

export class RelationshipsService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Get relationships for person
     * Get relationships for person
     * @param data The data for the request.
     * @param data.personId
     * @returns RelationshipDTO default response
     * @throws ApiError
     */
    public findRelationshipsForPerson(data: FindRelationshipsForPersonData): CancelablePromise<FindRelationshipsForPersonResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/relationships/person/{personId}',
            path: {
                personId: data.personId
            }
        });
    }
    
}