export type AddressDTO = {
    id?: number;
    street?: string;
    zip?: string;
    city?: string;
    additional?: string;
    po?: string;
    poZip?: string;
    districtId?: number;
    country?: string;
    locality?: string;
};
export type ContactPersonMappingDTO = {
    id?: number;
    childId?: number;
    parentId?: number;
    isEmergency?: boolean;
    includeAddressOnList?: boolean;
    includeHomePhoneOnList?: boolean;
};
export type ContactInformationDTO = {
    type: string;
    medium: string;
    personId?: number;
    addressId?: number;
    externalName?: string;
    content: string;
    comment?: string;
    secret?: boolean;
    id?: number;
    order?: number;
};
export type ContentDisposition = {
    type?: string;
    name?: string;
    filename?: string;
    charset?: {
        registered?: boolean;
    };
    size?: number;
    creationDate?: string;
    modificationDate?: string;
    readDate?: string;
    inline?: boolean;
    attachment?: boolean;
    formData?: boolean;
};
export type HttpHeaders = {
    connection?: Array<(string)>;
    date?: number;
    contentLength?: number;
    lastModified?: number;
    host?: {
        hostString?: string;
        address?: {
            multicastAddress?: boolean;
            anyLocalAddress?: boolean;
            linkLocalAddress?: boolean;
            siteLocalAddress?: boolean;
            mcglobal?: boolean;
            mcnodeLocal?: boolean;
            mclinkLocal?: boolean;
            mcsiteLocal?: boolean;
            mcorgLocal?: boolean;
            canonicalHostName?: string;
            loopbackAddress?: boolean;
            address?: Array<(string)>;
            hostAddress?: string;
            hostName?: string;
        };
        port?: number;
        unresolved?: boolean;
        hostName?: string;
    };
    origin?: string;
    contentType?: MediaType;
    ifModifiedSince?: number;
    empty?: boolean;
    location?: string;
    all?: {
        [key: string]: (string);
    };
    etag?: string;
    range?: Array<HttpRange>;
    allow?: Array<('GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE')>;
    vary?: Array<(string)>;
    contentLanguage?: {
        language?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: Array<(string)>;
        unicodeLocaleAttributes?: Array<(string)>;
        unicodeLocaleKeys?: Array<(string)>;
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        displayName?: string;
    };
    cacheControl?: string;
    expires?: number;
    acceptPatch?: Array<MediaType>;
    accept?: Array<MediaType>;
    acceptLanguage?: Array<{
        range?: string;
        weight?: number;
    }>;
    accessControlMaxAge?: number;
    acceptCharset?: Array<{
        registered?: boolean;
    }>;
    basicAuth?: string;
    bearerAuth?: string;
    contentDisposition?: ContentDisposition;
    ifMatch?: Array<(string)>;
    ifNoneMatch?: Array<(string)>;
    ifUnmodifiedSince?: number;
    pragma?: string;
    upgrade?: string;
    acceptLanguageAsLocales?: Array<{
        language?: string;
        script?: string;
        country?: string;
        variant?: string;
        extensionKeys?: Array<(string)>;
        unicodeLocaleAttributes?: Array<(string)>;
        unicodeLocaleKeys?: Array<(string)>;
        iso3Language?: string;
        iso3Country?: string;
        displayLanguage?: string;
        displayScript?: string;
        displayCountry?: string;
        displayVariant?: string;
        displayName?: string;
    }>;
    accessControlAllowOrigin?: string;
    accessControlAllowMethods?: Array<('GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE')>;
    accessControlAllowHeaders?: Array<(string)>;
    accessControlAllowCredentials?: boolean;
    accessControlRequestMethod?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';
    accessControlRequestHeaders?: Array<(string)>;
    accessControlExposeHeaders?: Array<(string)>;
    [key: string]: (Array<string> | string | number | unknown | MediaType | boolean | HttpRange | ContentDisposition) | undefined;
};
export type accessControlRequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';
export type HttpRange = {
    [key: string]: unknown;
};
export type MediaType = {
    type?: string;
    subtype?: string;
    parameters?: {
        [key: string]: (string);
    };
    qualityValue?: number;
    wildcardType?: boolean;
    wildcardSubtype?: boolean;
    subtypeSuffix?: string;
    charset?: {
        registered?: boolean;
    };
    concrete?: boolean;
};
export type ResponseEntityObject = {
    headers?: {
        connection?: Array<(string)>;
        date?: number;
        contentLength?: number;
        lastModified?: number;
        host?: {
            hostString?: string;
            address?: {
                multicastAddress?: boolean;
                anyLocalAddress?: boolean;
                linkLocalAddress?: boolean;
                siteLocalAddress?: boolean;
                mcglobal?: boolean;
                mcnodeLocal?: boolean;
                mclinkLocal?: boolean;
                mcsiteLocal?: boolean;
                mcorgLocal?: boolean;
                canonicalHostName?: string;
                loopbackAddress?: boolean;
                address?: Array<(string)>;
                hostAddress?: string;
                hostName?: string;
            };
            port?: number;
            unresolved?: boolean;
            hostName?: string;
        };
        origin?: string;
        contentType?: MediaType;
        ifModifiedSince?: number;
        empty?: boolean;
        location?: string;
        all?: {
            [key: string]: (string);
        };
        etag?: string;
        range?: Array<HttpRange>;
        allow?: Array<('GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE')>;
        vary?: Array<(string)>;
        contentLanguage?: {
            language?: string;
            script?: string;
            country?: string;
            variant?: string;
            extensionKeys?: Array<(string)>;
            unicodeLocaleAttributes?: Array<(string)>;
            unicodeLocaleKeys?: Array<(string)>;
            iso3Language?: string;
            iso3Country?: string;
            displayLanguage?: string;
            displayScript?: string;
            displayCountry?: string;
            displayVariant?: string;
            displayName?: string;
        };
        cacheControl?: string;
        expires?: number;
        acceptPatch?: Array<MediaType>;
        accept?: Array<MediaType>;
        acceptLanguage?: Array<{
            range?: string;
            weight?: number;
        }>;
        accessControlMaxAge?: number;
        acceptCharset?: Array<{
            registered?: boolean;
        }>;
        basicAuth?: string;
        bearerAuth?: string;
        contentDisposition?: ContentDisposition;
        ifMatch?: Array<(string)>;
        ifNoneMatch?: Array<(string)>;
        ifUnmodifiedSince?: number;
        pragma?: string;
        upgrade?: string;
        acceptLanguageAsLocales?: Array<{
            language?: string;
            script?: string;
            country?: string;
            variant?: string;
            extensionKeys?: Array<(string)>;
            unicodeLocaleAttributes?: Array<(string)>;
            unicodeLocaleKeys?: Array<(string)>;
            iso3Language?: string;
            iso3Country?: string;
            displayLanguage?: string;
            displayScript?: string;
            displayCountry?: string;
            displayVariant?: string;
            displayName?: string;
        }>;
        accessControlAllowOrigin?: string;
        accessControlAllowMethods?: Array<('GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE')>;
        accessControlAllowHeaders?: Array<(string)>;
        accessControlAllowCredentials?: boolean;
        accessControlRequestMethod?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';
        accessControlRequestHeaders?: Array<(string)>;
        accessControlExposeHeaders?: Array<(string)>;
        [key: string]: (Array<string> | string | number | unknown | MediaType | boolean | HttpRange | ContentDisposition) | undefined;
    };
    body?: {
        [key: string]: unknown;
    };
    statusCode?: '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED';
    statusCodeValue?: number;
};
export type statusCode = '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED';
export type CreatePersonDTO = {
    id?: number;
    firstName?: string | null;
    allFirstNames?: string | null;
    lastName?: string;
    academicTitle?: string | null;
    birthDate?: string | null;
    addressId?: number;
    familyId?: number;
    familyRole?: string;
    gender?: string;
    placeOfBirth?: string;
    nationality?: string;
    countryOfOrigin?: string;
    religion?: string;
    email?: string;
    salutation?: string;
    prefix?: string;
    mobilePhone?: string;
    householdPhone?: string;
    businessPhone?: string;
    street?: string;
    country?: string;
    zipCode?: string;
    city?: string;
};
export type SuccessResponse = {
    code?: number;
    message?: string;
};
export type ContactInformationMappingDTO = {
    id?: number;
    childId?: number;
    contactInfoId?: number;
    emergencyPriority?: number;
    isOnList?: boolean;
};
export type ReligionDTO = {
    name?: string;
};
export type PersonDTO = {
    id?: number;
    firstName?: string | null;
    allFirstNames?: string | null;
    lastName?: string;
    academicTitle?: string | null;
    birthDate?: string | null;
    addressId?: number;
    familyId?: number;
    familyRole?: string;
    gender?: string;
    placeOfBirth?: string;
    nationality?: string;
    countryOfOrigin?: string;
    religion?: string;
    email?: string;
    salutation?: string;
    prefix?: string;
};
export type GroupDTO = {
    id: number;
    name: string;
    type: string;
    grade?: string;
    character?: string;
    schoolYear?: string;
};
export type DistrictDTO = {
    id: number;
    name: string;
};
export type CountryDTO = {
    idx?: string;
    name: string;
    iso: string;
};
export type GroupMembershipDTO = {
    id?: number;
    entry?: string;
    exit?: string;
};
export type CreateAddressDTO = {
    personId?: number;
    street?: string;
    zip?: string;
    city?: string;
    additional?: string;
    po?: string;
    poZip?: string;
    districtId?: number;
    country?: string;
};
export type RelationshipDTO = {
    personId?: number;
    relationshipType?: string;
    physical?: boolean;
    custody?: boolean;
    realParent?: boolean;
    notes?: string;
};
export type FindAddressByIdData = {
    id: number;
};
export type FindAddressByIdResponse = AddressDTO;
export type FindAllAddressesResponse = Array<AddressDTO>;
export type CreateAddressData = {
    requestBody?: CreateAddressDTO;
};
export type CreateAddressResponse = AddressDTO;
export type GetContactPersonMappingsData = {
    childId: number;
};
export type GetContactPersonMappingsResponse = Array<ContactPersonMappingDTO>;
export type CreateContactPersonMappingData = {
    childId: number;
    requestBody?: ContactPersonMappingDTO;
};
export type CreateContactPersonMappingResponse = ContactPersonMappingDTO;
export type DeleteContactInformationMappingData = {
    childId: number;
    contactInformationMappingId: number;
};
export type DeleteContactInformationMappingResponse = unknown;
export type GetContactInformationMappingsData = {
    childId: number;
};
export type GetContactInformationMappingsResponse = Array<ContactInformationMappingDTO>;
export type CreateContactInformationMappingData = {
    childId: number;
    requestBody?: ContactInformationMappingDTO;
};
export type CreateContactInformationMappingResponse = ContactInformationMappingDTO;
export type DeleteContactPersonMappingData = {
    childId: number;
    contactPersonMappingId: number;
};
export type DeleteContactPersonMappingResponse = unknown;
export type CreateContactInformationData = {
    requestBody?: ContactInformationDTO;
};
export type CreateContactInformationResponse = ResponseEntityObject;
export type FindByIdData = {
    contactInformationId: number;
};
export type FindByIdResponse = ContactInformationDTO;
export type UpdateContactInformationData = {
    contactInformationId: number;
    requestBody?: ContactInformationDTO;
};
export type UpdateContactInformationResponse = ContactInformationDTO;
export type DeleteContactInformationData = {
    contactInformationId: number;
};
export type DeleteContactInformationResponse = ResponseEntityObject;
export type FindByAddressData = {
    addressId: number;
};
export type FindByAddressResponse = Array<ContactInformationDTO>;
export type FindByPersonData = {
    personId: number;
};
export type FindByPersonResponse = Array<ContactInformationDTO>;
export type FindAllPersonsResponse = Array<PersonDTO>;
export type CreatePersonData = {
    requestBody?: CreatePersonDTO;
};
export type CreatePersonResponse = SuccessResponse;
export type FindPersonData = {
    id: number;
};
export type FindPersonResponse = PersonDTO;
export type UpdatePersonData = {
    id: number;
    requestBody?: PersonDTO;
};
export type UpdatePersonResponse = SuccessResponse;
export type FindAllReligionsResponse = Array<ReligionDTO>;
export type FindAllGroupsResponse = Array<GroupDTO>;
export type FindGroupMembersByIdData = {
    id: number;
};
export type FindGroupMembersByIdResponse = Array<GroupMembershipDTO>;
export type FindGroupByIdData = {
    id: number;
};
export type FindGroupByIdResponse = GroupDTO;
export type FindDistrictByIdData = {
    id: number;
};
export type FindDistrictByIdResponse = DistrictDTO;
export type FindAllDistrictsResponse = Array<DistrictDTO>;
export type FindAllCountriesResponse = Array<CountryDTO>;
export type FindCountryByIdxData = {
    idx: string;
};
export type FindCountryByIdxResponse = CountryDTO;
export type FindRelationshipsForPersonData = {
    personId: number;
};
export type FindRelationshipsForPersonResponse = Array<RelationshipDTO>;
export type $OpenApiTs = {
    '/addresses/{id}': {
        get: {
            req: FindAddressByIdData;
            res: {
                /**
                 * default response
                 */
                200: AddressDTO;
            };
        };
    };
    '/addresses': {
        get: {
            res: {
                /**
                 * default response
                 */
                200: Array<AddressDTO>;
            };
        };
        post: {
            req: CreateAddressData;
            res: {
                /**
                 * default response
                 */
                200: AddressDTO;
            };
        };
    };
    '/communication/child/{childId}/persons': {
        get: {
            req: GetContactPersonMappingsData;
            res: {
                /**
                 * default response
                 */
                200: Array<ContactPersonMappingDTO>;
            };
        };
        post: {
            req: CreateContactPersonMappingData;
            res: {
                /**
                 * default response
                 */
                200: ContactPersonMappingDTO;
            };
        };
    };
    '/communication/child/{childId}/information/{contactInformationMappingId}': {
        delete: {
            req: DeleteContactInformationMappingData;
            res: {
                /**
                 * default response
                 */
                200: unknown;
            };
        };
    };
    '/communication/child/{childId}/information': {
        get: {
            req: GetContactInformationMappingsData;
            res: {
                /**
                 * default response
                 */
                200: Array<ContactInformationMappingDTO>;
            };
        };
        post: {
            req: CreateContactInformationMappingData;
            res: {
                /**
                 * default response
                 */
                200: ContactInformationMappingDTO;
            };
        };
    };
    '/communication/child/{childId}/persons/{contactPersonMappingId}': {
        delete: {
            req: DeleteContactPersonMappingData;
            res: {
                /**
                 * default response
                 */
                200: unknown;
            };
        };
    };
    '/contactinformation': {
        post: {
            req: CreateContactInformationData;
            res: {
                /**
                 * default response
                 */
                200: ResponseEntityObject;
            };
        };
    };
    '/contactinformation/{contactInformationId}': {
        get: {
            req: FindByIdData;
            res: {
                /**
                 * default response
                 */
                200: ContactInformationDTO;
            };
        };
        put: {
            req: UpdateContactInformationData;
            res: {
                /**
                 * default response
                 */
                200: ContactInformationDTO;
            };
        };
        delete: {
            req: DeleteContactInformationData;
            res: {
                /**
                 * default response
                 */
                200: ResponseEntityObject;
            };
        };
    };
    '/contactinformation/address/{addressId}': {
        get: {
            req: FindByAddressData;
            res: {
                /**
                 * default response
                 */
                200: Array<ContactInformationDTO>;
            };
        };
    };
    '/contactinformation/person/{personId}': {
        get: {
            req: FindByPersonData;
            res: {
                /**
                 * default response
                 */
                200: Array<ContactInformationDTO>;
            };
        };
    };
    '/persons': {
        get: {
            res: {
                /**
                 * default response
                 */
                200: Array<PersonDTO>;
            };
        };
        post: {
            req: CreatePersonData;
            res: {
                /**
                 * default response
                 */
                200: SuccessResponse;
            };
        };
    };
    '/persons/{id}': {
        get: {
            req: FindPersonData;
            res: {
                /**
                 * default response
                 */
                200: PersonDTO;
            };
        };
        put: {
            req: UpdatePersonData;
            res: {
                /**
                 * default response
                 */
                200: SuccessResponse;
            };
        };
    };
    '/religions': {
        get: {
            res: {
                /**
                 * default response
                 */
                200: Array<ReligionDTO>;
            };
        };
    };
    '/groups': {
        get: {
            res: {
                /**
                 * default response
                 */
                200: Array<GroupDTO>;
            };
        };
    };
    '/groups/{id}/members': {
        get: {
            req: FindGroupMembersByIdData;
            res: {
                /**
                 * default response
                 */
                200: Array<GroupMembershipDTO>;
            };
        };
    };
    '/groups/{id}': {
        get: {
            req: FindGroupByIdData;
            res: {
                /**
                 * default response
                 */
                200: GroupDTO;
            };
        };
    };
    '/districts/{id}': {
        get: {
            req: FindDistrictByIdData;
            res: {
                /**
                 * default response
                 */
                200: DistrictDTO;
            };
        };
    };
    '/districts': {
        get: {
            res: {
                /**
                 * default response
                 */
                200: Array<DistrictDTO>;
            };
        };
    };
    '/countries': {
        get: {
            res: {
                /**
                 * default response
                 */
                200: Array<CountryDTO>;
            };
        };
    };
    '/countries/{idx}': {
        get: {
            req: FindCountryByIdxData;
            res: {
                /**
                 * default response
                 */
                200: CountryDTO;
            };
        };
    };
    '/relationships/person/{personId}': {
        get: {
            req: FindRelationshipsForPersonData;
            res: {
                /**
                 * default response
                 */
                200: Array<RelationshipDTO>;
            };
        };
    };
};
