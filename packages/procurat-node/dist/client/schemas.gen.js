"use strict";
// This file is auto-generated by @hey-api/openapi-ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.$GroupMembershipDTO = exports.$RelationshipDTO = exports.$CountryDTO = exports.$GroupDTO = exports.$CreateAddressDTO = exports.$DistrictDTO = exports.$ReligionDTO = exports.$SuccessResponse = exports.$CreatePersonDTO = exports.$PersonDTO = exports.$AddressDTO = void 0;
exports.$AddressDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        street: {
            type: 'string'
        },
        zip: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        additional: {
            type: 'string'
        },
        po: {
            type: 'string'
        },
        poZip: {
            type: 'string'
        },
        district: {
            type: 'string'
        },
        country: {
            type: 'string'
        },
        locality: {
            type: 'string'
        }
    }
};
exports.$PersonDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        firstName: {
            type: 'string',
            nullable: true
        },
        allFirstNames: {
            type: 'string',
            nullable: true
        },
        lastName: {
            type: 'string'
        },
        academicTitle: {
            type: 'string',
            nullable: true
        },
        birthDate: {
            type: 'string',
            nullable: true
        },
        addressId: {
            type: 'integer',
            format: 'int32'
        },
        familyId: {
            type: 'integer',
            format: 'int32'
        },
        familyRole: {
            type: 'string'
        },
        gender: {
            type: 'string'
        },
        placeOfBirth: {
            type: 'string'
        },
        nationality: {
            type: 'string'
        },
        countryOfOrigin: {
            type: 'string'
        },
        religion: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        salutation: {
            type: 'string'
        },
        prefix: {
            type: 'string'
        }
    }
};
exports.$CreatePersonDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        firstName: {
            type: 'string',
            nullable: true
        },
        allFirstNames: {
            type: 'string',
            nullable: true
        },
        lastName: {
            type: 'string'
        },
        academicTitle: {
            type: 'string',
            nullable: true
        },
        birthDate: {
            type: 'string',
            nullable: true
        },
        addressId: {
            type: 'integer',
            format: 'int32'
        },
        familyId: {
            type: 'integer',
            format: 'int32'
        },
        familyRole: {
            type: 'string'
        },
        gender: {
            type: 'string'
        },
        placeOfBirth: {
            type: 'string'
        },
        nationality: {
            type: 'string'
        },
        countryOfOrigin: {
            type: 'string'
        },
        religion: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        salutation: {
            type: 'string'
        },
        prefix: {
            type: 'string'
        },
        mobilePhone: {
            type: 'string'
        },
        householdPhone: {
            type: 'string'
        },
        businessPhone: {
            type: 'string'
        },
        street: {
            type: 'string'
        },
        country: {
            type: 'string'
        },
        zipCode: {
            type: 'string'
        },
        city: {
            type: 'string'
        }
    }
};
exports.$SuccessResponse = {
    type: 'object',
    properties: {
        code: {
            type: 'integer',
            format: 'int32'
        },
        message: {
            type: 'string'
        }
    }
};
exports.$ReligionDTO = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    }
};
exports.$DistrictDTO = {
    required: ['name'],
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    }
};
exports.$CreateAddressDTO = {
    type: 'object',
    properties: {
        personId: {
            type: 'integer',
            format: 'int32'
        },
        street: {
            type: 'string'
        },
        zip: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        additional: {
            type: 'string'
        },
        po: {
            type: 'string'
        },
        poZip: {
            type: 'string'
        },
        district: {
            type: 'string'
        },
        country: {
            type: 'string'
        }
    }
};
exports.$GroupDTO = {
    required: ['id', 'name', 'type'],
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        name: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        grade: {
            type: 'string'
        },
        character: {
            type: 'string'
        },
        schoolYear: {
            type: 'string'
        }
    }
};
exports.$CountryDTO = {
    required: ['iso', 'name'],
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        iso: {
            type: 'string'
        }
    }
};
exports.$RelationshipDTO = {
    type: 'object',
    properties: {
        personId: {
            type: 'integer',
            format: 'int32'
        },
        relationshipType: {
            type: 'string'
        },
        physical: {
            type: 'boolean'
        },
        custody: {
            type: 'boolean'
        },
        realParent: {
            type: 'boolean'
        },
        notes: {
            type: 'string'
        }
    }
};
exports.$GroupMembershipDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        entry: {
            type: 'string'
        },
        exit: {
            type: 'string'
        }
    }
};