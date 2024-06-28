"use strict";
// This file is auto-generated by @hey-api/openapi-ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PersonCreationDTO = exports.$ResponseEntityObject = exports.$MediaType = exports.$HttpRange = exports.$HttpHeaders = exports.$ContentDisposition = exports.$ContactInformationCreationDTO = exports.$CountyDTO = exports.$ReligionDTO = exports.$ContactInformationMappingDTO = exports.$CountryDTO = exports.$RelationshipDTO = exports.$GroupMemberDTO = exports.$HealthDTO = exports.$AddressDTO = exports.$AddressCreationDTO = exports.$ContactInformationDTO = exports.$GroupDTO = exports.$SuccessResponse = exports.$PersonDTO = exports.$ContactPersonMappingDTO = void 0;
exports.$ContactPersonMappingDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        childId: {
            type: 'integer',
            format: 'int32'
        },
        parentId: {
            type: 'integer',
            format: 'int32'
        },
        isEmergency: {
            type: 'boolean'
        },
        includeAddressOnList: {
            type: 'boolean'
        },
        includeHomePhoneOnList: {
            type: 'boolean'
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
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        gender: {
            type: 'string'
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
        birthDate: {
            type: 'string'
        },
        birthPlace: {
            type: 'string'
        },
        birthCountryId: {
            type: 'integer',
            format: 'int32'
        },
        languageId: {
            type: 'integer',
            format: 'int32'
        },
        religionId: {
            type: 'integer',
            format: 'int32'
        },
        allFirstNames: {
            type: 'string'
        },
        birthName: {
            type: 'string'
        },
        academicTitle: {
            type: 'string'
        },
        namePrefix: {
            type: 'string'
        },
        nobilityTitle: {
            type: 'string'
        },
        salutationA: {
            type: 'string'
        },
        salutationB: {
            type: 'string'
        },
        jobTitle: {
            type: 'string'
        },
        comment: {
            type: 'string'
        },
        nationalityId: {
            type: 'integer',
            format: 'int32'
        },
        maritalStatus: {
            type: 'string'
        },
        deathDate: {
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
exports.$GroupDTO = {
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
exports.$ContactInformationDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        order: {
            type: 'integer',
            format: 'int32'
        },
        type: {
            type: 'string'
        },
        medium: {
            type: 'string'
        },
        personId: {
            type: 'integer',
            format: 'int32'
        },
        addressId: {
            type: 'integer',
            format: 'int32'
        },
        externalName: {
            type: 'string'
        },
        content: {
            type: 'string'
        },
        comment: {
            type: 'string'
        },
        secret: {
            type: 'boolean'
        }
    }
};
exports.$AddressCreationDTO = {
    type: 'object',
    properties: {
        personId: {
            type: 'integer',
            format: 'int32'
        },
        street: {
            type: 'string'
        },
        countryId: {
            type: 'integer',
            format: 'int32'
        },
        zip: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        nameline2: {
            type: 'string'
        },
        additional: {
            type: 'string'
        },
        district: {
            type: 'string'
        },
        poBoxZip: {
            type: 'string'
        },
        poBox: {
            type: 'string'
        },
        countyId: {
            type: 'integer',
            format: 'int32'
        }
    }
};
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
        countryId: {
            type: 'integer',
            format: 'int32'
        },
        zip: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        nameline2: {
            type: 'string'
        },
        additional: {
            type: 'string'
        },
        district: {
            type: 'string'
        },
        poBoxZip: {
            type: 'string'
        },
        poBox: {
            type: 'string'
        },
        countyId: {
            type: 'integer',
            format: 'int32'
        }
    }
};
exports.$HealthDTO = {
    type: 'object',
    properties: {
        databaseVersion: {
            type: 'integer',
            format: 'int32'
        },
        build: {
            type: 'integer',
            format: 'int32'
        },
        databaseValid: {
            type: 'boolean'
        },
        databaseLocked: {
            type: 'boolean'
        },
        lastUpdateStart: {
            type: 'string'
        },
        lastUpdateEnd: {
            type: 'string'
        },
        lastUpdateFailed: {
            type: 'string'
        }
    }
};
exports.$GroupMemberDTO = {
    type: 'object',
    properties: {
        personId: {
            type: 'integer',
            format: 'int32'
        },
        entryDate: {
            type: 'string'
        },
        exitDate: {
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
exports.$CountryDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        idx: {
            type: 'string'
        },
        iso: {
            type: 'string'
        }
    }
};
exports.$ContactInformationMappingDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        childId: {
            type: 'integer',
            format: 'int32'
        },
        contactInfoId: {
            type: 'integer',
            format: 'int32'
        },
        emergencyPriority: {
            type: 'integer',
            format: 'int32'
        },
        isOnList: {
            type: 'boolean'
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
exports.$CountyDTO = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int32'
        },
        name: {
            type: 'string'
        }
    }
};
exports.$ContactInformationCreationDTO = {
    required: ['content', 'medium', 'type'],
    type: 'object',
    properties: {
        type: {
            type: 'string'
        },
        medium: {
            type: 'string'
        },
        personId: {
            type: 'integer',
            format: 'int32'
        },
        addressId: {
            type: 'integer',
            format: 'int32'
        },
        externalName: {
            type: 'string'
        },
        content: {
            type: 'string'
        },
        comment: {
            type: 'string'
        },
        secret: {
            type: 'boolean'
        }
    }
};
exports.$ContentDisposition = {
    type: 'object',
    properties: {
        type: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        filename: {
            type: 'string'
        },
        charset: {
            type: 'object',
            properties: {
                registered: {
                    type: 'boolean'
                }
            }
        },
        size: {
            type: 'integer',
            format: 'int64'
        },
        creationDate: {
            type: 'string',
            format: 'date-time'
        },
        modificationDate: {
            type: 'string',
            format: 'date-time'
        },
        readDate: {
            type: 'string',
            format: 'date-time'
        },
        inline: {
            type: 'boolean'
        },
        attachment: {
            type: 'boolean'
        },
        formData: {
            type: 'boolean'
        }
    }
};
exports.$HttpHeaders = {
    type: 'object',
    properties: {
        date: {
            type: 'integer',
            format: 'int64'
        },
        contentLength: {
            type: 'integer',
            format: 'int64'
        },
        lastModified: {
            type: 'integer',
            format: 'int64'
        },
        connection: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        contentType: {
            '$ref': '#/components/schemas/MediaType'
        },
        ifModifiedSince: {
            type: 'integer',
            format: 'int64'
        },
        host: {
            type: 'object',
            properties: {
                hostString: {
                    type: 'string'
                },
                address: {
                    type: 'object',
                    properties: {
                        loopbackAddress: {
                            type: 'boolean'
                        },
                        multicastAddress: {
                            type: 'boolean'
                        },
                        anyLocalAddress: {
                            type: 'boolean'
                        },
                        linkLocalAddress: {
                            type: 'boolean'
                        },
                        siteLocalAddress: {
                            type: 'boolean'
                        },
                        mcglobal: {
                            type: 'boolean'
                        },
                        mcnodeLocal: {
                            type: 'boolean'
                        },
                        mclinkLocal: {
                            type: 'boolean'
                        },
                        mcsiteLocal: {
                            type: 'boolean'
                        },
                        mcorgLocal: {
                            type: 'boolean'
                        },
                        canonicalHostName: {
                            type: 'string'
                        },
                        address: {
                            type: 'array',
                            items: {
                                type: 'string',
                                format: 'byte'
                            }
                        },
                        hostAddress: {
                            type: 'string'
                        },
                        hostName: {
                            type: 'string'
                        }
                    }
                },
                port: {
                    type: 'integer',
                    format: 'int32'
                },
                unresolved: {
                    type: 'boolean'
                },
                hostName: {
                    type: 'string'
                }
            }
        },
        origin: {
            type: 'string'
        },
        empty: {
            type: 'boolean'
        },
        location: {
            type: 'string',
            format: 'uri'
        },
        all: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            },
            writeOnly: true
        },
        range: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/HttpRange'
            }
        },
        allow: {
            uniqueItems: true,
            type: 'array',
            items: {
                type: 'string',
                enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
            }
        },
        etag: {
            type: 'string'
        },
        vary: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        cacheControl: {
            type: 'string'
        },
        expires: {
            type: 'integer',
            format: 'int64'
        },
        contentLanguage: {
            type: 'object',
            properties: {
                language: {
                    type: 'string'
                },
                script: {
                    type: 'string'
                },
                country: {
                    type: 'string'
                },
                variant: {
                    type: 'string'
                },
                extensionKeys: {
                    uniqueItems: true,
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                unicodeLocaleAttributes: {
                    uniqueItems: true,
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                unicodeLocaleKeys: {
                    uniqueItems: true,
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                iso3Language: {
                    type: 'string'
                },
                iso3Country: {
                    type: 'string'
                },
                displayLanguage: {
                    type: 'string'
                },
                displayScript: {
                    type: 'string'
                },
                displayCountry: {
                    type: 'string'
                },
                displayVariant: {
                    type: 'string'
                },
                displayName: {
                    type: 'string'
                }
            }
        },
        acceptPatch: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MediaType'
            }
        },
        accept: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MediaType'
            }
        },
        acceptLanguage: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    range: {
                        type: 'string'
                    },
                    weight: {
                        type: 'number',
                        format: 'double'
                    }
                }
            }
        },
        accessControlMaxAge: {
            type: 'integer',
            format: 'int64'
        },
        acceptCharset: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    registered: {
                        type: 'boolean'
                    }
                }
            }
        },
        basicAuth: {
            type: 'string',
            writeOnly: true
        },
        bearerAuth: {
            type: 'string',
            writeOnly: true
        },
        contentDisposition: {
            '$ref': '#/components/schemas/ContentDisposition'
        },
        ifMatch: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ifNoneMatch: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        ifUnmodifiedSince: {
            type: 'integer',
            format: 'int64'
        },
        pragma: {
            type: 'string'
        },
        upgrade: {
            type: 'string'
        },
        acceptLanguageAsLocales: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    language: {
                        type: 'string'
                    },
                    script: {
                        type: 'string'
                    },
                    country: {
                        type: 'string'
                    },
                    variant: {
                        type: 'string'
                    },
                    extensionKeys: {
                        uniqueItems: true,
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    unicodeLocaleAttributes: {
                        uniqueItems: true,
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    unicodeLocaleKeys: {
                        uniqueItems: true,
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    iso3Language: {
                        type: 'string'
                    },
                    iso3Country: {
                        type: 'string'
                    },
                    displayLanguage: {
                        type: 'string'
                    },
                    displayScript: {
                        type: 'string'
                    },
                    displayCountry: {
                        type: 'string'
                    },
                    displayVariant: {
                        type: 'string'
                    },
                    displayName: {
                        type: 'string'
                    }
                }
            }
        },
        accessControlAllowCredentials: {
            type: 'boolean'
        },
        accessControlAllowHeaders: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        accessControlAllowMethods: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
            }
        },
        accessControlAllowOrigin: {
            type: 'string'
        },
        accessControlExposeHeaders: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        accessControlRequestHeaders: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        accessControlRequestMethod: {
            type: 'string',
            enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
        }
    },
    additionalProperties: {
        type: 'array',
        items: {
            type: 'string'
        }
    }
};
exports.$HttpRange = {
    type: 'object'
};
exports.$MediaType = {
    type: 'object',
    properties: {
        type: {
            type: 'string'
        },
        subtype: {
            type: 'string'
        },
        parameters: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        qualityValue: {
            type: 'number',
            format: 'double'
        },
        concrete: {
            type: 'boolean'
        },
        charset: {
            type: 'object',
            properties: {
                registered: {
                    type: 'boolean'
                }
            }
        },
        wildcardType: {
            type: 'boolean'
        },
        wildcardSubtype: {
            type: 'boolean'
        },
        subtypeSuffix: {
            type: 'string'
        }
    }
};
exports.$ResponseEntityObject = {
    type: 'object',
    properties: {
        headers: {
            type: 'object',
            properties: {
                date: {
                    type: 'integer',
                    format: 'int64'
                },
                contentLength: {
                    type: 'integer',
                    format: 'int64'
                },
                lastModified: {
                    type: 'integer',
                    format: 'int64'
                },
                connection: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                contentType: {
                    '$ref': '#/components/schemas/MediaType'
                },
                ifModifiedSince: {
                    type: 'integer',
                    format: 'int64'
                },
                host: {
                    type: 'object',
                    properties: {
                        hostString: {
                            type: 'string'
                        },
                        address: {
                            type: 'object',
                            properties: {
                                loopbackAddress: {
                                    type: 'boolean'
                                },
                                multicastAddress: {
                                    type: 'boolean'
                                },
                                anyLocalAddress: {
                                    type: 'boolean'
                                },
                                linkLocalAddress: {
                                    type: 'boolean'
                                },
                                siteLocalAddress: {
                                    type: 'boolean'
                                },
                                mcglobal: {
                                    type: 'boolean'
                                },
                                mcnodeLocal: {
                                    type: 'boolean'
                                },
                                mclinkLocal: {
                                    type: 'boolean'
                                },
                                mcsiteLocal: {
                                    type: 'boolean'
                                },
                                mcorgLocal: {
                                    type: 'boolean'
                                },
                                canonicalHostName: {
                                    type: 'string'
                                },
                                address: {
                                    type: 'array',
                                    items: {
                                        type: 'string',
                                        format: 'byte'
                                    }
                                },
                                hostAddress: {
                                    type: 'string'
                                },
                                hostName: {
                                    type: 'string'
                                }
                            }
                        },
                        port: {
                            type: 'integer',
                            format: 'int32'
                        },
                        unresolved: {
                            type: 'boolean'
                        },
                        hostName: {
                            type: 'string'
                        }
                    }
                },
                origin: {
                    type: 'string'
                },
                empty: {
                    type: 'boolean'
                },
                location: {
                    type: 'string',
                    format: 'uri'
                },
                all: {
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    },
                    writeOnly: true
                },
                range: {
                    type: 'array',
                    items: {
                        '$ref': '#/components/schemas/HttpRange'
                    }
                },
                allow: {
                    uniqueItems: true,
                    type: 'array',
                    items: {
                        type: 'string',
                        enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
                    }
                },
                etag: {
                    type: 'string'
                },
                vary: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                cacheControl: {
                    type: 'string'
                },
                expires: {
                    type: 'integer',
                    format: 'int64'
                },
                contentLanguage: {
                    type: 'object',
                    properties: {
                        language: {
                            type: 'string'
                        },
                        script: {
                            type: 'string'
                        },
                        country: {
                            type: 'string'
                        },
                        variant: {
                            type: 'string'
                        },
                        extensionKeys: {
                            uniqueItems: true,
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        unicodeLocaleAttributes: {
                            uniqueItems: true,
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        unicodeLocaleKeys: {
                            uniqueItems: true,
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        iso3Language: {
                            type: 'string'
                        },
                        iso3Country: {
                            type: 'string'
                        },
                        displayLanguage: {
                            type: 'string'
                        },
                        displayScript: {
                            type: 'string'
                        },
                        displayCountry: {
                            type: 'string'
                        },
                        displayVariant: {
                            type: 'string'
                        },
                        displayName: {
                            type: 'string'
                        }
                    }
                },
                acceptPatch: {
                    type: 'array',
                    items: {
                        '$ref': '#/components/schemas/MediaType'
                    }
                },
                accept: {
                    type: 'array',
                    items: {
                        '$ref': '#/components/schemas/MediaType'
                    }
                },
                acceptLanguage: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            range: {
                                type: 'string'
                            },
                            weight: {
                                type: 'number',
                                format: 'double'
                            }
                        }
                    }
                },
                accessControlMaxAge: {
                    type: 'integer',
                    format: 'int64'
                },
                acceptCharset: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            registered: {
                                type: 'boolean'
                            }
                        }
                    }
                },
                basicAuth: {
                    type: 'string',
                    writeOnly: true
                },
                bearerAuth: {
                    type: 'string',
                    writeOnly: true
                },
                contentDisposition: {
                    '$ref': '#/components/schemas/ContentDisposition'
                },
                ifMatch: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                ifNoneMatch: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                ifUnmodifiedSince: {
                    type: 'integer',
                    format: 'int64'
                },
                pragma: {
                    type: 'string'
                },
                upgrade: {
                    type: 'string'
                },
                acceptLanguageAsLocales: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            language: {
                                type: 'string'
                            },
                            script: {
                                type: 'string'
                            },
                            country: {
                                type: 'string'
                            },
                            variant: {
                                type: 'string'
                            },
                            extensionKeys: {
                                uniqueItems: true,
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            },
                            unicodeLocaleAttributes: {
                                uniqueItems: true,
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            },
                            unicodeLocaleKeys: {
                                uniqueItems: true,
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            },
                            iso3Language: {
                                type: 'string'
                            },
                            iso3Country: {
                                type: 'string'
                            },
                            displayLanguage: {
                                type: 'string'
                            },
                            displayScript: {
                                type: 'string'
                            },
                            displayCountry: {
                                type: 'string'
                            },
                            displayVariant: {
                                type: 'string'
                            },
                            displayName: {
                                type: 'string'
                            }
                        }
                    }
                },
                accessControlAllowCredentials: {
                    type: 'boolean'
                },
                accessControlAllowHeaders: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                accessControlAllowMethods: {
                    type: 'array',
                    items: {
                        type: 'string',
                        enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
                    }
                },
                accessControlAllowOrigin: {
                    type: 'string'
                },
                accessControlExposeHeaders: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                accessControlRequestHeaders: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                accessControlRequestMethod: {
                    type: 'string',
                    enum: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
                }
            },
            additionalProperties: {
                type: 'array',
                items: {
                    type: 'string'
                }
            }
        },
        body: {
            type: 'object'
        },
        statusCode: {
            type: 'string',
            enum: ['100 CONTINUE', '101 SWITCHING_PROTOCOLS', '102 PROCESSING', '103 CHECKPOINT', '200 OK', '201 CREATED', '202 ACCEPTED', '203 NON_AUTHORITATIVE_INFORMATION', '204 NO_CONTENT', '205 RESET_CONTENT', '206 PARTIAL_CONTENT', '207 MULTI_STATUS', '208 ALREADY_REPORTED', '226 IM_USED', '300 MULTIPLE_CHOICES', '301 MOVED_PERMANENTLY', '302 FOUND', '302 MOVED_TEMPORARILY', '303 SEE_OTHER', '304 NOT_MODIFIED', '305 USE_PROXY', '307 TEMPORARY_REDIRECT', '308 PERMANENT_REDIRECT', '400 BAD_REQUEST', '401 UNAUTHORIZED', '402 PAYMENT_REQUIRED', '403 FORBIDDEN', '404 NOT_FOUND', '405 METHOD_NOT_ALLOWED', '406 NOT_ACCEPTABLE', '407 PROXY_AUTHENTICATION_REQUIRED', '408 REQUEST_TIMEOUT', '409 CONFLICT', '410 GONE', '411 LENGTH_REQUIRED', '412 PRECONDITION_FAILED', '413 PAYLOAD_TOO_LARGE', '413 REQUEST_ENTITY_TOO_LARGE', '414 URI_TOO_LONG', '414 REQUEST_URI_TOO_LONG', '415 UNSUPPORTED_MEDIA_TYPE', '416 REQUESTED_RANGE_NOT_SATISFIABLE', '417 EXPECTATION_FAILED', '418 I_AM_A_TEAPOT', '419 INSUFFICIENT_SPACE_ON_RESOURCE', '420 METHOD_FAILURE', '421 DESTINATION_LOCKED', '422 UNPROCESSABLE_ENTITY', '423 LOCKED', '424 FAILED_DEPENDENCY', '425 TOO_EARLY', '426 UPGRADE_REQUIRED', '428 PRECONDITION_REQUIRED', '429 TOO_MANY_REQUESTS', '431 REQUEST_HEADER_FIELDS_TOO_LARGE', '451 UNAVAILABLE_FOR_LEGAL_REASONS', '500 INTERNAL_SERVER_ERROR', '501 NOT_IMPLEMENTED', '502 BAD_GATEWAY', '503 SERVICE_UNAVAILABLE', '504 GATEWAY_TIMEOUT', '505 HTTP_VERSION_NOT_SUPPORTED', '506 VARIANT_ALSO_NEGOTIATES', '507 INSUFFICIENT_STORAGE', '508 LOOP_DETECTED', '509 BANDWIDTH_LIMIT_EXCEEDED', '510 NOT_EXTENDED', '511 NETWORK_AUTHENTICATION_REQUIRED']
        },
        statusCodeValue: {
            type: 'integer',
            format: 'int32'
        }
    }
};
exports.$PersonCreationDTO = {
    type: 'object',
    properties: {
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        gender: {
            type: 'string'
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
        birthDate: {
            type: 'string'
        },
        birthPlace: {
            type: 'string'
        },
        birthCountryId: {
            type: 'integer',
            format: 'int32'
        },
        languageId: {
            type: 'integer',
            format: 'int32'
        },
        religionId: {
            type: 'integer',
            format: 'int32'
        },
        allFirstNames: {
            type: 'string'
        },
        birthName: {
            type: 'string'
        },
        academicTitle: {
            type: 'string'
        },
        namePrefix: {
            type: 'string'
        },
        nobilityTitle: {
            type: 'string'
        },
        salutationA: {
            type: 'string'
        },
        salutationB: {
            type: 'string'
        },
        jobTitle: {
            type: 'string'
        },
        nationalityId: {
            type: 'integer',
            format: 'int32'
        },
        maritalStatus: {
            type: 'string'
        },
        deathDate: {
            type: 'string'
        }
    }
};