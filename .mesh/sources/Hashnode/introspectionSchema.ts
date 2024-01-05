// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        },
        {
          "kind": "OperationTypeDefinition",
          "operation": "mutation",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Mutation"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "requireAuth"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "scopes"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Scope"
                }
              }
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "constraint"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "minLength"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "maxLength"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "startsWith"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "endsWith"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pattern"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "format"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "min"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "max"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "exclusiveMin"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "exclusiveMax"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "multipleOf"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "minItems"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "maxItems"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uniqueTypeName"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "INPUT_FIELD_DEFINITION"
        },
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        },
        {
          "kind": "Name",
          "value": "ARGUMENT_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "hidden"
      },
      "arguments": [],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "private"
      },
      "arguments": [],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DateTime"
      },
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A field whose value conforms with the standard mongodb object Id as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ObjectId"
      },
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Enum of all the scopes that can be used with the @requireAuth directive.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Scope"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "write_post"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "write_series"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "create_pro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "assign_pro_publications"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "active_pro_user"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "change_pro_subscription"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "signup"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "import_subscribers_to_publication"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "acknowledge_email_import"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "recommend_publications"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "publication_admin"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "webhook_admin"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "update_post"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "publish_draft"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "publish_post"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "publish_comment"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "update_comment"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "remove_comment"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "publish_reply"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "update_reply"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "remove_reply"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "SortOrder is a common enum for all types that can be sorted.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SortOrder"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "asc"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "dsc"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Node is a common interface for all types example User, Post, Comment, etc.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Node"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the node.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of items.\nReturns a list of edges which contains the items and cursor to the last item of the previous page.\nThis is a common interface for all connections.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Connection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges of items connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Edge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An edge that contains a node and cursor to the node.\nThis is a common interface for all edges.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Edge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A node in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Node"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A Connection for page based pagination to get a list of items.\nReturns a list of nodes which contains the items.\nThis is a common interface for all page connections.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PageConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges of items connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "nodes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Node"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OffsetPageInfo"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Common fields that describe a feature.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Feature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether the feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information to help in pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PageInfo"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicates if there are more pages.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hasNextPage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cursor of the last item in the current page.\nUse it as the after input to query the next page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "endCursor"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information to help in pagination for page based pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "OffsetPageInfo"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicates if there are more pages.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hasNextPage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicates if there are previous pages",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hasPreviousPage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The page before the current page.\nUse it to build page navigation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "previousPage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The page after the current page.\nUse it to build page navigation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "nextPage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Content"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Markdown version of the content.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "markdown"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The HTML version of the content.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "html"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The text version from sanitized html content. HTML tags are stripped and only text is returned.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "text"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Information to help in seo related meta tags.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SEO"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title used in og:title tag for SEO purposes.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The description used in og:description tag for SEO purposes.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Information to help in open graph related meta tags.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "OpenGraphMetaData"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The image used in og:image tag for SEO purposes.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "image"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the user with the username.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "user"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The username of the user to retrieve.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "username"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "User"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns users who have most actively participated in discussions by commenting in the last 7 days.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "topCommenters"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of users to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CommenterUserConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the current authenticated user. Only available to the authenticated user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "me"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "MyUser"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns tag details by its slug.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tag"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The slug of the tag to retrieve.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "slug"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Tag"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the publication with the given ID or host.\nUser can pass anyone of them.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publication"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The ID of the publication.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ObjectId"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The host of the publication.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "host"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Publication"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a paginated list of posts based on the provided filter.\nUsed in Hashnode home feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "feed"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of items to be returned per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Filters to be applied to the feed.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FeedFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FeedPostConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a paginated list of posts based on search query for a particular publication id.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "searchPostsOfPublication"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of items to be returned per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filter to be applied to the search.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "SearchPostsOfPublicationFilter"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "SearchPostConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a draft by ID.\nDraft is a post that is not published yet.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "draft"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The ID of the draft to retrieve.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ObjectId"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Draft"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get a scheduled post by ID.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scheduledPost"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The ID of the scheduled post to get.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ObjectId"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ScheduledPost"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Mutation"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update the follow state for the user that is provided via id or username.\nIf the authenticated user does not follow the user, the mutation will follow the user.\nIf the authenticated user already follows the user, the mutation will un-follow the user.\nOnly available to the authenticated user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "toggleFollowUser"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "username"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ToggleFollowUserPayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "subscribeToNewsletter"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "SubscribeToNewsletterInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "SubscribeToNewsletterPayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "unsubscribeFromNewsletter"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UnsubscribeFromNewsletterInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UnsubscribeFromNewsletterPayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Creates a new post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publishPost"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Information about the post to be published.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PublishPostInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PublishPostPayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Adds a post to a series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "addPostToSeries"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AddPostToSeriesInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AddPostToSeriesPayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "updatePost"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UpdatePostInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UpdatePostPayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Reschedule a post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "reschedulePost"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ReschedulePostInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ScheduledPostPayload"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for users to another user. Contains a list of nodes.\nEach node is a user.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of users",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "nodes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "User"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for page based pagination in users connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OffsetPageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PageConnection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Basic information about a user on Hashnode.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "IUser"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the user. It can be used to identify the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The bio of the user. Visible in about me section of the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bio"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL to the profile picture of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "profilePicture"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The social media links of the user. Shown on the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "socialMediaLinks"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "SocialMediaLinks"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "badges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Badge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publications associated with the user. Includes personal and team publications.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publications"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of publications to return in a batch.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The cursor to start the query from.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Filter to apply to the publications.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPublicationsConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPublicationsConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of posts the user has published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The sort direction for the posts.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "sortBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPostsSort"
                }
              },
              "defaultValue": {
                "kind": "EnumValue",
                "value": "DATE_PUBLISHED_DESC"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the post list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPostConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPostConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of users that follow the requested user. Visible in the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of users that this user is following. Visible in the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followingsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The tagline of the user. Shown on the user's profile below the name.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the user joined Hashnode.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateJoined"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The location of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "location"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The availability of the user based on tech stack and interests. Shown on the \"I am available for\" section in user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "availableFor"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of tags that the user follows.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagsFollowing"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Tag"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not the user is an ambassador.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ambassador"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not the user is deactivated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "deactivated"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The users who are following this user",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of users to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The users which this user is following",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "follows"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of users to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Basic information about a user on Hashnode.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "User"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the user. It can be used to identify the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The bio of the user. Visible in about me section of the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bio"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The bio of the user. Visible in about me section of the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bioV2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "Will be removed on 26/10/2023. Use bio instead of bioV2"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL to the profile picture of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "profilePicture"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The social media links of the user. Shown on the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "socialMediaLinks"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "SocialMediaLinks"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "badges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Badge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publications associated with the user. Includes personal and team publications.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publications"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of publications to return in a batch.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The cursor to start the query from.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Filter to apply to the publications.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPublicationsConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPublicationsConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of posts the user has published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The sort direction for the posts based on the publish dates.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "sortBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPostsSort"
                }
              },
              "defaultValue": {
                "kind": "EnumValue",
                "value": "DATE_PUBLISHED_DESC"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the post list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPostConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPostConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of users that follow the requested user. Visible in the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of users that this user is following. Visible in the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followingsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The tagline of the user. Shown on the user's profile below the name.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the user joined Hashnode.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateJoined"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The location of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "location"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The availability of the user based on tech stack and interests. Shown on the \"I am available for\" section in user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "availableFor"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of tags that the user follows.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagsFollowing"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Tag"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not the user is an ambassador.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ambassador"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "Ambassadors program no longer active. Will be removed after 02/01/2024"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not the user is deactivated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "deactivated"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not the authenticated user follows this user.\nReturns false if the authenticated user this user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "following"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not this user follows the authenticated user.\nReturns false if the authenticated user this user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followsBack"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not this is a pro user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isPro"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The users who are following this user",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The users which this user is following",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "follows"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "IUser"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Basic information about the authenticated user.\nUser must be authenticated to use this type.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "MyUser"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the user. It can be used to identify the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The bio of the user. Visible in about me section of the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bio"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL to the profile picture of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "profilePicture"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The social media links of the user. Shown on the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "socialMediaLinks"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "SocialMediaLinks"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "badges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Badge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publications associated with the user. Includes personal and team publications.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publications"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of publications to return in a batch.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The cursor to start the query from.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Filter to apply to the publications.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPublicationsConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPublicationsConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of posts the user has published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The sort direction for the posts based on the publish dates.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "sortBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPostsSort"
                }
              },
              "defaultValue": {
                "kind": "EnumValue",
                "value": "DATE_PUBLISHED_DESC"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the post list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPostConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPostConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of users that follow the requested user. Visible in the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of users that this user is following. Visible in the user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followingsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The tagline of the user. Shown on the user's profile below the name.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the user joined Hashnode.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateJoined"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The location of the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "location"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The availability of the user based on tech stack and interests. Shown on the \"I am available for\" section in user's profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "availableFor"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of tags that the user follows.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagsFollowing"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Tag"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not the user is an ambassador.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ambassador"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "Ambassadors program no longer active. Will be removed after 02/01/2024"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "provider"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not the user is deactivated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "deactivated"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of beta features that the user has access to. Only available to the authenticated user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "betaFeatures"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "BetaFeature"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Hashnode users are subscribed to a newsletter by default. This field can be used to unsubscribe from the newsletter. Only available to the authenticated user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "unsubscribeCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Email address of the user. Only available to the authenticated user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The users who are following this user",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The users which this user is following",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "follows"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return on a single page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The page number that should be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "IUser"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of publications.\nReturns a list of edges which contains the publications and cursor to the last item of the previous page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPublicationsConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges of publications connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UserPublicationsEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total amount of publications taking into account the filter.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An edge that contains a node of type publication and cursor to the node.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPublicationsEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Node containing the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Publication"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cursor to the node.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The role of the user in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "role"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UserPublicationRole"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The role of the user in the publication.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPublicationRole"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The owner is the creator of the publication and can do all things, including delete publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "OWNER"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The editor has access to the publication dashboard to customize the blog and approve/reject posts.\nThey also have access to the member panel to add/modify/remove members. Editors cannot remove other editors or update their roles.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "EDITOR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Contributors can join the publication and contribute an article. They cannot directly publish a new article.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "CONTRIBUTOR"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available social media links.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SocialMediaLinks"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's website.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "website"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's GitHub profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "github"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's Twitter profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "twitter"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's Instagram profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "instagram"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's Facebook profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "facebook"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's StackOverflow profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stackoverflow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's LinkedIn profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "linkedin"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user's YouTube profile.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "youtube"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A badge that the user has earned.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Badge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the badge.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the badge.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The description of the badge.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The image of the badge.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "image"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the badge was earned.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateAssigned"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Link to badge page on Hashnode.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "infoURL"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to determine if the badge is hidden.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "suppressed"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter to apply to the publications.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPublicationsConnectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only include publication in which the user has one of the provided roles.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "roles"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "UserPublicationRole"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only return pro publications.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isPro"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Payload for the toggleFollowingUser mutation.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ToggleFollowUserPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user that was followed/unfollowed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "user"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "User"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of top commenters. Contains a list of edges containing nodes.\nEach node is a user who commented recently.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CommenterUserConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges of commenters.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UserEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a node of type user and cursor for pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node containing User information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for the posts of a user.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPostsAuthorTypeFilter"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only posts that are authored by the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "AUTHOR_ONLY"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only posts that are co-authored by the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "CO_AUTHOR_ONLY"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Sorting for the posts of a user.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPostsSort"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Newest posts first.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "DATE_PUBLISHED_DESC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Oldest posts first.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "DATE_PUBLISHED_ASC"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for the posts of a user.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPostConnectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only include posts that reference the provided tag IDs.\n\n\nFiltering by `tags` and `tagSlugs` will filter posts that match either of those two filters.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only include posts that reference the provided tag slugs.\n\nFiltering by `tags` and `tagSlugs` will filter posts that match either of those two filters.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagSlugs"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filtering by publication IDs will return posts from the author within the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publications"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filtering by author status. Either all posts the user has authored or co-authored are returned or the authored posts only.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "authorType"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "UserPostsAuthorTypeFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the tag.\nA tag is a label that categorizes posts with similar topics.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ITag"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the tag. Shown in tag page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The logo of the tag. Shown in tag page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The tagline of the tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the tag. Contains markdown html and text version of the tag's info.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "info"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of users following this tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Alltime usage count of this tag in posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Tag"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the tag. Shown in tag page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The logo of the tag. Shown in tag page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The tagline of the tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the tag. Contains markdown html and text version of the tag's info.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "info"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of users following this tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Alltime usage count of this tag in posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Paginated list of posts published under this tag",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts in particular tag to return per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The cursor after which the posts are to be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The cursor before which the posts are to be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "TagPostConnectionFilter"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FeedPostConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ITag"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the tag returned by popularTags query.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PopularTag"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the tag. Shown in tag page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The logo of the tag. Shown in tag page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The tagline of the tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagline"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the tag. Contains markdown html and text version of the tag's info.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "info"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of users following this tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Alltime usage count of this tag in posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of posts published in the given period that use this tag.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postsCountInPeriod"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ITag"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The field by which to sort the tag feed.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "TagPostsSort"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Determinate how to sort the results. Defaults to recents, used in New tag feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "recent"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sorts by popularity, used in Hot tag feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "popular"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Trending is particular used to fetch top posts trending within a week time under a tag",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "trending"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "TagPostConnectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sort tag feed by recents, popular, or trending. Defaults to recents.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sortBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "TagPostsSort"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a tag and a cursor for pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PopularTagEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node holding the Tag information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PopularTag"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a tag and a cursor for pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "TagEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node holding the Tag information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Tag"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the publication.\nA publication is a blog that can be created for a user or a team.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Publication"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the publication.\nTitle is used as logo if logo is not provided.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the publication. Shown in blog home page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "displayTitle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The description of the publication, used in og:description meta tag. Fall backs to Publication.about.text if no SEO description is provided.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "descriptionSEO"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The about section of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "about"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The domain of the publication. Used to access publication. Example https://johndoe.com",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The canonical URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "canonicalURL"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The author who owns the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The favicon of the publication. Used in browser tab.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "favicon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Color code of the header color of the publication. Used to style header of blog.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "headerColor"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The meta tags associated with the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "metaTags"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The integrations connected to the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "integrations"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PublicationIntegrations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication preferences around layout, theme and other personalisations.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "preferences"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Preferences"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of followers of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "followersCount"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Summary of the contact information and information related to copyrights, usually used in German-speaking countries.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "imprint"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "Use `imprintV2` instead. Will be removed after 16/12/2023."
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Summary of the contact information and information related to copyrights, usually used in German-speaking countries.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "imprintV2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "True if the publication is a team publication and false otherwise.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isTeam"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Links to the publication's social media profiles.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PublicationLinks"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Domain information of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "domainInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DomainInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the publication is using Headless CMS. This can be used to check if the post redirect needs authentication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isHeadless"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns series by slug in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "slug"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Series"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of series in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seriesList"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of series to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item in the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "SeriesConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of posts in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item in the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the post list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PublicationPostConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PublicationPostConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the pinned post of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pinnedPost"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Post"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the post with the given slug.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "post"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "slug"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Post"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the publication's Open Graph metadata i.e. image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ogMetaData"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OpenGraphMetaData"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Object containing information about beta features enabled for the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "features"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PublicationFeatures"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of drafts in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "drafts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of drafts to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item in the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the draft list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PublicationDraftConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DraftConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the scheduled drafts of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scheduledDrafts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of scheduled drafts to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item in the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the draft list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PublicationDraftConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DraftConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the static page with the given slug.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "staticPage"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The slug of the static page to retrieve.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "slug"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StaticPage"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of static pages in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "staticPages"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of static pages to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item in the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "StaticPageConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the list of submitted drafts in the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "submittedDrafts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of submitted drafts to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item in the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The filters to be applied to the draft list.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PublicationDraftConnectionFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DraftConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns true if GitHub backup is configured and active and false otherwise.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isGitHubBackupEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Determines the structure of the post URLs.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "urlPattern"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UrlPattern"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the publication's email imports, used with newsletter feature.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "emailImport"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EmailImport"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Configured redirection rules for the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "redirectionRules"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "RedirectionRule"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether the publication has earned any badges or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hasBadges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Contains the publication's sponsorships information.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sponsorship"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PublicationSponsorship"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publications that are recommended by this publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "recommendedPublications"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UserRecommendedPublicationEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total amount of recommended publications by this publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalRecommendedPublications"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publications that are recommending this publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "recommendingPublications"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Size of the page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "pageSize"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Page number.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "page"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PublicationUserRecommendingPublicationConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UserRecommendedPublicationEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication that is recommended by the publication this connection originates from.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Publication"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The amount of followers the publication referenced in `node` has gained by recommendations from the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalFollowersGained"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PublicationUserRecommendingPublicationConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UserRecommendingPublicationEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publications recommending this publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "nodes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Publication"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for page based pagination in Post connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OffsetPageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PageConnection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UserRecommendingPublicationEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication that is recommending the publication this connection originates from.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Publication"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The amount of followers the publication has gained by recommendations from the publication referenced in `node`.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalFollowersGained"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "RSSImport"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL pointing to the RSS feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rssURL"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's Sponsorship information.\nUser can sponsor their favorite publications and pay them directly using Stripe.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationSponsorship"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The content shared by author of the publication to their sponsors.\nThis is used as note to inform that author is open for sponsorship.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "content"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Stripe configuration of the publication's Sponsorship.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stripe"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StripeConfiguration"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's Stripe configuration.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "StripeConfiguration"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the publication is connected to Stripe.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "connected"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Stripe account ID of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "accountId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country of origin of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "RedirectionRule"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The type of the redirection rule.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "HttpRedirectionType"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The source URL of the redirection rule.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "source"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The destination URL of the redirection rule.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "destination"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HttpRedirectionType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A temporary redirect that corresponds to the 307 HTTP status code.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "TEMPORARY"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A permanent redirect that corresponds to the 308 HTTP status code.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "PERMANENT"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of posts in publications.\nReturns a list of edges which contains the posts in publication and cursor to the last item of the previous page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationPostConnectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filtering by tag slugs and tag IDs will return posts that match either of the filters.\n\nIt is an \"OR\" filter and not an \"AND\" filter.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ObjectId"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Filtering by tag slugs and tag IDs will return posts that match either of the filters.\n\nIt is an \"OR\" filter and not an \"AND\" filter.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tagSlugs"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Remove pinned post from the result set.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "excludePinnedPost"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of drafts in publications.\nReturns a list of edges which contains the drafts in publication and cursor to the last item of the previous page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationDraftConnectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Search filter will be applied to the title of a draft",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "search"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's beta features.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationFeatures"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Newsletter feature for the publication which adds a `/newsletter` route for collecting subscribers and allows sending out newsletters.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "newsletter"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "NewsletterFeature"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Show the view count for blog posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "viewCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ViewCountFeature"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Show the read time for blog posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "readTime"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ReadTimeFeature"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Audio player for blog posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "audioBlog"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AudioBlogFeature"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Widget that shows up if a text on a blog post is selected. Allows for easy sharing or copying of the selected text.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "textSelectionSharer"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "TextSelectionSharerFeature"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Individual styling for the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "customCSS"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CustomCSSFeature"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the flag indicating if the newsletter feature is enabled or not.\nUser can enable or disable the newsletter feature from the publication settings.\nShows a newsletter prompt on blog if enabled.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "NewsletterFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the newsletter feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "frequency"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "NewsletterFrequency"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "NewsletterFrequency"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "asap"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "weekly"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the flag indicating if the view count feature is enabled or not.\nUser can enable or disable the view count feature from the publication settings.\nShows total views on blogs if enabled.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ViewCountFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the view count feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the flag indicating if the read time feature is enabled or not.\nUser can enable or disable the read time feature from the publication settings.\nShows read time on blogs if enabled.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ReadTimeFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the read time feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the flag indicating if the audio blog feature is enabled or not.\nUser can enable or disable the audio blog feature from the publication settings.\nShows audio player on blogs if enabled.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "AudioBlogFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the audio blog feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The voice type for the audio blog.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "voiceType"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AudioBlogVoiceType"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the flag indicating if the text selection sharer feature is enabled or not.\nUser can enable or disable the text selection sharer feature from the publication settings.\nShows a widget if a text on a blog post is selected. Allows for easy sharing or copying of the selected text.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "TextSelectionSharerFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the text selection sharer feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CustomCSSFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the custom CSS feature is enabled or not.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "CSS that is live.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "published"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CustomCSS"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "CSS that is not published yet.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "draft"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CustomCSS"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CustomCSS"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom CSS that will be applied on the publication homepage.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "home"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom CSS that will be applied on all posts of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "post"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom CSS that will be applied on all static pages of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "static"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The same as `home` but minified.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "homeMinified"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The same as `post` but minified.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postMinified"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The same as `static` but minified.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "staticMinified"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UrlPattern"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Post URLs contain the slug (for example `my slug`) and a random id (like `1234`) , e.g. \"/my-slug-1234\".",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "DEFAULT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Post URLs only contain the slug, e.g. \"/my-slug\".",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "SIMPLE"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains publication's layout choices.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationLayout"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Changes the layout of blog into stacked list of posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stacked"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Changes the layout of blog into grid 3 post cards per row.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "grid"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Changes the layout of blog into magazine style.\nThis is the newest layout.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "magazine"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's domain information.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DomainInfo"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The subdomain of the publication on hashnode.dev.\n\nIt will redirect to you custom domain if it is present and ready.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hashnodeSubdomain"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The domain of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "domain"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DomainStatus"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The www prefixed domain of the publication. Says if redirect to www domain is configured.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wwwPrefixedDomain"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DomainStatus"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's domain status.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DomainStatus"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The host of the publication domain.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "host"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the publication domain is ready.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ready"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's preferences for layout, theme and other personalisations.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Preferences"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication's logo url.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication's darkmode preferences. Can be used to load blog in dark mode by default and add a custom dark mode logo.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "darkMode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DarkModePreferences"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "An object containing pages enabled for the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "enabledPages"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PagesPreferences"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The items in the publication's navigation bar.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "navbarItems"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PublicationNavbarItem"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The selected publication's layout, can be stacked, grid or magazine.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "layout"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PublicationLayout"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the hashnode's footer branding is disabled for the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "disableFooterBranding"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if subscription popup needs to be shown to be shown for the publication",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isSubscriptionModalDisabled"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's navbar items.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationNavbarItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The unique identifier of the navbar item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The label of the navbar item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "label"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL of the navbar item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The order of the navbar item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "priority"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The type of the navbar item, can be series, link or page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PublicationNavigationType"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The series added to the navbar item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Series"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The static page added to the navbar item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "page"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StaticPage"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The type of the navbar item, can be series, link or page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationNavigationType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The navbar item is a series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The navbar item is a link.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "link"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The navbar item is a static page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "page"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the preferences publication's autogenerated pages.\nUsed to enable or disable pages like badge, newsletter and members.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PagesPreferences"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the publication's badge page is enabled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "badges"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the publication's newsletter page is enabled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "newsletter"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the publication's member page is enabled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "members"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's dark mode preferences.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DarkModePreferences"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the dark mode is enabled for the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "enabled"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The custom dark mode logo of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "logo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's integrations.\nUsed to connect the publication with third party services like Google Analytics, Facebook Pixel, etc.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationIntegrations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "FB Pixel ID for integration with Facebook Pixel.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "fbPixelID"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Fathom Analytics Site ID for integration with Fathom Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "fathomSiteID"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the custom domain is enabled for integration with Fathom Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "fathomCustomDomainEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom domain for integration with Fathom Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "fathomCustomDomain"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Hotjar Site ID for integration with Hotjar.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hotjarSiteID"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Matomo Site ID for integration with Matomo Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "matomoSiteID"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Matomo URL for integration with Matomo Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "matomoURL"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Google Analytics Tracking ID for integration with Google Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "gaTrackingID"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag indicating if the custom domain is enabled for integration with Plausible Analytics.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "plausibleAnalyticsEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Web Monetization Payment Pointer for integration with Web Monetization.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wmPaymentPointer"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID for the Hashnode-provided Umami analytics instance.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "umamiWebsiteUUID"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains the publication's social media links.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationLinks"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Twitter URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "twitter"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Instagram URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "instagram"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "GitHub URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "github"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Website URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "website"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Hashnode profile of author of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hashnode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "YouTube URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "youtube"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Daily.dev URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dailydev"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "LinkedIn URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "linkedin"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Mastodon URL of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "mastodon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The voice type for the audio blog.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "AudioBlogVoiceType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Enum for the female voice type of the audio blog.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "FEMALE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Enum for the male voice type of the audio blog.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "MALE"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The status of the email import.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "EmailImportStatus"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Import has been initialized but is not yet in progress.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "INITIALIZED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Import is in progress.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "IN_PROGRESS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Import has to be reviewed by Hashnode. It is not yet reviewed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "IN_REVIEW"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Import was successful. New emails have been imported.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "SUCCESS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "There was an error during the import.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "FAILED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The has been rejected. Nothing has been imported.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "REJECTED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The import has been acknowledged by the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "FINISHED"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about the email import.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "EmailImport"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Contains information about the current import example if it is in progress or has finished, date started, etc",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "currentImport"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EmailCurrentImport"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The input for the email import acknowledgement mutation.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "EmailCurrentImport"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The status of the import",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "status"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "EmailImportStatus"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the import started",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "importStartedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of subscribers that have been successfully imported",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "successfullyImported"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of subscribers that have attempted to import",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attemptedToImport"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The filename of the csv file containing emails",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "filename"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a publication and a cursor for pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "RecommendedPublicationEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node holding the Publication information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Publication"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "SubscribeToNewsletterInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the publication to subscribe to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicationId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The email of the subscriber.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UnsubscribeFromNewsletterInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the publication to unsubscribe from.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicationId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The email that is currently subscribed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "NewsletterSubscribeStatus"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PENDING"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "SubscribeToNewsletterPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "status"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "NewsletterSubscribeStatus"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "NewsletterUnsubscribeStatus"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "UNSUBSCRIBED"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UnsubscribeFromNewsletterPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "status"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "NewsletterUnsubscribeStatus"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the post.\nA post is a published article on Hashnode.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Post"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the post. Used to uniquely identify the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the post. Used as address of the post on blog. Example - https://johndoe.com/my-post-slug",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The subtitle of the post. Subtitle is a short description of the post which is also used in SEO if meta tags are not provided.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subtitle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the user details of the author of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the user details of the co-authors of the post.\nHashnode users can add up to 4 co-authors as collaborators to their posts.\nThis functionality is limited to teams publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coAuthors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "User"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns list of tags added to the post. Contains tag id, name, slug, etc.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Tag"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Complete URL of the post including the domain name. Example - https://johndoe.com/my-post-slug",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Canonical URL set by author in case of republished posts.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "canonicalUrl"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication the post belongs to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publication"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Publication"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unique ID to identify post, used internally by hashnode.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cuid"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cover image preference of the post. Contains cover image URL and other details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PostCoverImage"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Brief is a short description of the post extracted from the content of the post. It's 250 characters long sanitized string.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "brief"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The estimated time to read the post in minutes.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "readTimeInMinutes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of views on the post. Can be used to show the popularity of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "views"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information of the series the post belongs to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Series"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of hearts on the post. Shows how many users liked the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "reactionCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of replies on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "replyCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of comments on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "responseCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Flag to indicate if the post is featured on Hashnode feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "featured"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of contributors of the post. Contributors are users who have commented or replied to the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contributors"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "User"
                  }
                }
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "Will be removed on 10th Oct 2023. Use `commenters` instead."
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of users who have commented on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "commenters"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of users to be returned per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The sorting option for commenters. Used to sort commenters by popularity or recency.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "sortBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PostCommenterSortBy"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostCommenterConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of comments on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "comments"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of comments to be returned per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The sorting option for comments. Used to sort comments by top or recent.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "sortBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PostCommentSortBy"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostCommentConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Flag to indicate if the post is bookmarked by the requesting user.\n\nReturns `false` if the user is not authenticated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bookmarked"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Content of the post. Contains HTML and Markdown version of the post content.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "content"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Content"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of users who liked the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "likedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of users to be returned per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "filter"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PostLikerFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostLikerConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the post was featured. Used along with featured flag to determine if the post is featured.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "featuredAt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the post was published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publishedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the post was last updated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Preference settings for the post. Contains information about if the post is pinned to blog, comments are disabled, etc.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "preferences"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostPreferences"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns male and female audio url of the post. Available in case the Audioblog is enabled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "audioUrls"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "AudioUrls"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "SEO information of the post. Contains title and description used in meta tags.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "SEO"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "OG meta-data of the post. Contains image url used in open graph meta tags.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ogMetaData"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "OpenGraphMetaData"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post contains LaTeX. Latex is used to write mathematical equations.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hasLatexInPost"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not the authenticated user is following this post.\n\nReturns `null` if the user is not authenticated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isFollowed"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not the post has automatically been published via RSS feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isAutoPublishedFromRSS"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Post feature-related fields.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "features"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostFeatures"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PostFeatures"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "tableOfContents"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "TableOfContentsFeature"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "badges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostBadgesFeature"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "TableOfContentsFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not ser has chosen to show a table of contents on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The content of the table of contents.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "items"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "TableOfContentsItem"
                  }
                }
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PostBadgesFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not the user has chosen to show badges on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEnabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "items"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostBadge"
                  }
                }
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Feature"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "TableOfContentsItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unique identifier.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The level of nesting. Refers to the heading level in the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "level"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the referenced headline.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the referenced headline.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "ID of the `TableOfContentsItem` that is one level higher in the hierarchy. `null` if this is a top level item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "parentId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PostBadge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unique identifier.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The type of the badge.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostBadgeType"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PostBadgeType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "FEATURED_HASHNODE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "FEATURED_DAILY_DOT_DEV"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PostLikerFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Only return likes from users with the given user IDs.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "userIds"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ID"
                }
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Used when Audioblog feature is enabled. Contains URLs to the audioblog of the post.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "AudioUrls"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Male version of audio url of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "male"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Female version of audio url of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "female"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains Post preferences. Used to determine if the post is pinned to blog, comments are disabled, or cover image is sticked to bottom.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostPreferences"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post is pinned to blog. Pinned post is shown on top of the blog.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pinnedToBlog"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the comments are disabled for the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "disableComments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stickCoverToBottom"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not the post is hidden from the Hashnode community.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isDelisted"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Sorting options for commenters. Used to sort commenters by popularity or recency.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCommenterSortBy"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sorts commenters by popularity.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "POPULAR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sorts commenters by recency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "RECENT"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for commenters (users). Contains a list of edges containing nodes.\nEach node holds commenter.\nPage info contains information about pagination like hasNextPage and endCursor.\nTotal documents contains the total number of commenters.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCommenterConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing commenters as nodes.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostCommenterEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about pagination in a connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of nodes available i.e. number of commenters.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A commenter on the post. Contains information about the user who commented.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCommenterEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The commenter on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cursor for this node used for pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Sorting options for comments. Used to sort comments by top or recent.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCommentSortBy"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sorts comments by popularity.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "TOP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sorts comments by recency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "RECENT"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for comments. Contains a list of edges containing nodes.\nEach node holds a comment.\nPage info contains information about pagination like hasNextPage and endCursor.\nTotal documents contains the total number of comments.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCommentConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing comments as nodes.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostCommentEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about pagination in a connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of nodes available i.e. number of comments.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A comment on the post. Contains information about the content of the comment, user who commented, etc.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCommentEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The comment on the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Comment"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cursor for this node used for pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A user who liked the post. Contains information about the user and number of reactions added by the user.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostLikerEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user who liked the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cursor for this node used for pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of reaction added by the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "reactionCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for users who liked the post. Contains a list of edges containing nodes.\nEach node is a user who liked the post.\nPage info contains information about pagination like hasNextPage and endCursor.\nTotal documents contains the total number of users who liked the post.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostLikerConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing users as nodes",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostLikerEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about pagination in a connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of nodes available i.e. number of users who liked the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about the cover image of the post.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostCoverImage"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL of the cover image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicates whether the cover image is in portrait orientation.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isPortrait"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Provides attribution information for the cover image, if available.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attribution"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the photographer who captured the cover image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "photographer"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "True if the image attribution should be hidden.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isAttributionHidden"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a post and a cursor for pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node holding the Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Post"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The author type of a post from a user's perspective",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PostAuthorType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user has authored the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "AUTHOR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The user is a co-author of post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "CO_AUTHOR"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a post and the author status.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPostEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node holding the Post information.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Post"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Indicates weather the user is the author or co-author of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "authorType"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PostAuthorType"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for posts within a feed. Contains a list of edges containing nodes.\nEach node is a post.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "FeedPostConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for pagination in Post connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for posts within a publication search. Contains a list of edges containing nodes.\nEach node is a post.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SearchPostConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for pagination in Post connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for posts within a series. Contains a list of edges containing nodes.\nEach node is a post.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SeriesPostConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for pagination in Post connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for posts within a publication. Contains a list of edges containing nodes.\nEach node is a post.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublicationPostConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PostEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for pagination in Post connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for posts written by a single user. Contains a list of edges containing nodes.\nEach node is a post.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "UserPostConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Post information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UserPostEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of posts",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "nodes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Post"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for page based pagination in Post connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OffsetPageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PageConnection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PublishPostPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "post"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Post"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UpdatePostPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "post"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Post"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about cover image options of the post. Like URL of the cover image, attribution, etc.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CoverImageOptionsInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL of the cover image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImageURL"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the cover attribution is hidden, used when cover was chosen from unsplash.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isCoverAttributionHidden"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the cover image attribution.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImageAttribution"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the cover image photographer, used when cover was chosen from unsplash.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImagePhotographer"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the cover image is sticked to bottom.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stickCoverToBottom"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about meta tags of the post. Used for SEO purpose.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "MetaTagsInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the post used in og:title for SEO.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The description of the post used in og:description for SEO.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The image URL of the post used in og:image for SEO.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "image"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PublishPostTagInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A tag id that is referencing an existing tag.\n\nEither this or name and slug should be provided. If both are provided, the id will be used.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjectId"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A slug of a new tag to create.\n\nEither this and name or id should be provided. If both are provided, the id will be used.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A name of a new tag to create.\n\nEither this and slug or id should be provided. If both are provided, the id will be used.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UpdatePostSettingsInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post contains table of content",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isTableOfContentEnabled"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post is delisted, used to hide the post from public feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delisted"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not comments should be disabled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "disableComments"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Pin the post to the blog homepage.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pinToBlog"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "PublishPostSettingsInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post is scheduled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scheduled"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post contains table of content",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "enableTableOfContent"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Flag to indicate if the slug is overridden by the user.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slugOverridden"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether to send a newsletter for this post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isNewsletterActivated"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the post is delisted, used to hide the post from public feed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delisted"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about the post to be published.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PublishPostInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The subtitle of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subtitle"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of publication the post belongs to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicationId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Content of the post in markdown format.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contentMarkdown"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Date when the post is published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publishedAt"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Options for the cover image of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImageOptions"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CoverImageOptionsInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Slug of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL of the original article if the post is imported from an external source.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "originalArticleURL"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of tags added to the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PublishPostTagInput"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the comments are disabled for the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "disableComments"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the meta tags added to the post, used for SEO purpose.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "metaTags"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MetaTagsInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Publish the post on behalf of another user who is a member of the publication.\n\nOnly applicable for team publications.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publishAs"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjectId"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Providing a seriesId will add the post to that series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seriesId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjectId"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Settings for the post like table of contents and newsletter activation.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "settings"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PublishPostSettingsInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Ids of the co-authors of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coAuthors"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ObjectId"
                }
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UpdatePostInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The id of the post to update.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The new title of the post",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The subtitle of the post",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subtitle"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The publication the post is published to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contentMarkdown"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Backdated publish date.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publishedAt"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Options for the cover image of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImageOptions"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CoverImageOptionsInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Slug of the post. Only if you want to override the slug that will be generated based on the title.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Canonical URL of the original article.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "originalArticleURL"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Tags to add to the post. New tags will be created if they don't exist. It overrides the existing tags.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "PublishPostTagInput"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the meta tags added to the post, used for SEO purpose.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "metaTags"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MetaTagsInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Set a different author for the post than the requesting user.\nMust be a member of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publishAs"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjectId"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update co-authors of the post.\nMust be a member of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coAuthors"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ObjectId"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Providing a seriesId will add the post to that series.\nMust be a series of the publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seriesId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjectId"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Whether or not to enable the table of content.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "settings"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "UpdatePostSettingsInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "If the publication should be changed this is the new Publication ID",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicationId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjectId"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AddPostToSeriesInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the post to be added to the series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the series to which the post is to be added.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seriesId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AddPostToSeriesPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The series to which the post was added.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Series"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about type of feed to be returned.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "FeedType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns only posts of the users you follow or publications you have subscribed to.\n\nNote: You have to be authenticated to use this feed type.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "FOLLOWING"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns only posts based on users following and interactions.\n\nPersonalised feed is curated per requesting user basis.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "PERSONALIZED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns posts which were published recently, sorted based on recency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "RECENT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns posts based on old personalization algorithm.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "RELEVANT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns posts which were featured, sorted based on recency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "FEATURED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns posts which were bookmarked by the user, sorted based on recency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "BOOKMARKS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns posts which were viewed by the user, sorted based on recency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "READING_HISTORY"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FeedFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The type of feed to be returned.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FeedType"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Adds a filter to return posts with minimum number of minutes required to read the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "minReadTime"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Adds a filter to return posts with maximum number of minutes required to read the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "maxReadTime"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Adds a filter to return posts with tagged with provided tags only.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ObjectId"
                }
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "SearchPostsOfPublicationFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The query to be searched in post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "query"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of publications to search from.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicationId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the comment.\nA comment is a response to a post.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Comment"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the comment.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The content of the comment in markdown and html format.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "content"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Content"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The author of the comment.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of replies to the comment.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "replies"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of replies to return. Max is 50.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Returns the elements in the list that come after the specified cursor.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CommentReplyConnection"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the comment was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateAdded"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A unique string identifying the comment. Used as element id in the DOM on hashnode blogs.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stamp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of reactions on the comment. Reactions are hearts added to any comment.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalReactions"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of reactions on the comment by the authenticated user. User must be authenticated to use this field.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "myTotalReactions"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of replies to a comment.\nReturns a list of edges which contains the posts in publication and cursor to the last item of the previous page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CommentReplyConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing nodes in the connection.\nA node contains a reply to a comment.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CommentReplyEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An edge that contains a node of type reply and cursor to the node.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CommentReplyEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node containing a reply to a comment.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Reply"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor to the last item of the previous page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the reply.\nA reply is a response to a comment.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Reply"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the reply.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The content of the reply in markdown and html format.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "content"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Content"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The author of the reply.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the reply was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateAdded"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A unique string identifying the reply. Used as element id in the DOM on hashnode blogs.\nIt can be used to scroll to the reply in browser.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stamp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of reactions on the reply. Reactions are hearts added to any reply.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalReactions"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total number of reactions on the reply by the authenticated user. User must be authenticated to use this field.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "myTotalReactions"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the series.\nA series is a collection of posts that are related to each other.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Series"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the series. Shown in series page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the series was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The description of the series. Contains markdown and html version of the series's description.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cover image of the series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the user who is author of the series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unique identifier for the series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cuid"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the series. Used to access series page.  Example https://johndoe.com/series/series-slug",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The sort order of the series, determines if the latest posts should appear first or last in series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sortOrder"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "SortOrder"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a list of posts in the series.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of posts to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The cursor after which the posts are to be returned.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "SeriesPostConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains a Series and a cursor for pagination.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SeriesEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node holding the Series information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Series"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection for Series. Contains a list of edges containing nodes.\nEach node is a Series.\nPage info contains information about pagination like hasNextPage and endCursor.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "SeriesConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing Series information",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "SeriesEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information for pagination in SeriesList connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the draft.\nA draft is a post that is not published yet.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Draft"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the draft.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the draft. It would become the title of the post when published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The subtitle of the draft. It would become the subtitle of the post when published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subtitle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The author of the draft.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the user details of the co-authors of the post.\nHashnode users can add up to 4 co-authors as collaborators to their posts.\nThis functionality is limited to teams publication.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coAuthors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NonNullType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "User"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns list of tags added to the draft. Contains tag id, name, slug, etc.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "tags"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Tag"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "canonicalUrl"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cover image preference of the draft. Contains cover image URL and other details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "coverImage"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DraftCoverImage"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "readTimeInMinutes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information of the series the draft belongs to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "series"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Series"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Content of the draft in HTML and markdown",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "content"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Content"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the draft was updated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dateUpdated"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "Use updatedAt instead. Will be removed on 26/12/2023."
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "settings"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DraftSettings"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "SEO information of the draft. Contains title and description used in meta tags.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "SEO"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "OG meta-data of the draft. Contains image url used in open graph meta tags.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ogMetaData"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "OpenGraphMetaData"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Draft feature-related fields.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "features"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DraftFeatures"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the last backup of the draft.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lastBackup"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DraftBackup"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the draft was last successfully backed up.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lastSuccessfulBackupAt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the draft last failed to back up.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lastFailedBackupAt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DraftSettings"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the comments are disabled for the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "disableComments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "stickCoverToBottom"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wether or not the post is hidden from the Hashnode community.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isDelisted"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DraftFeatures"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "tableOfContents"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "TableOfContentsFeature"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DraftBackup"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The status of the backup i.e., success or failure.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "status"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "BackupStatus"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the backup was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "at"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The status of the backup i.e., success or failure.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "BackupStatus"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The backup was successful.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "success"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The backup failed.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "failed"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of drafts.\nReturns a list of edges which contains the draft and cursor to the last item of the previous page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DraftConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges of drafts connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "DraftEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains information about the cover image of the draft.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DraftCoverImage"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The URL of the cover image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Provides attribution information for the cover image, if available.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attribution"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The name of the photographer who captured the cover image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "photographer"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "True if the image attribution should be hidden.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isAttributionHidden"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An edge that contains a node of type draft and cursor to the node.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "DraftEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A node in the connection containing a draft.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Draft"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor for use in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the beta feature.\nA beta feature is a feature that is not yet released to all users.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "BetaFeature"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the beta feature.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The key of the beta feature.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "key"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the beta feature.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The description of the beta feature.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The url of the beta feature.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the beta feature was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "enabled"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the scheduled post.\nA scheduled post is a post that is scheduled to be published in the future.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ScheduledPost"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the scheduled post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date the scheduled post was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "User"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the draft associated with the scheduled post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "draft"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Draft"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The scheduled date for the post to be published. This is the date the post will be published.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scheduledDate"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns user who scheduled the post. This is usually the author of the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scheduledBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "User"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns the publication the post is scheduled for.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publication"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Publication"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ReschedulePostInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The Draft ID of the scheduled post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "draftId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ObjectId"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "New scheduled date for the post to be rescheduled.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scheduledDate"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ScheduledPostPayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Payload returned in response of reschedulePost mutation.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "payload"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ScheduledPost"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Contains basic information about the static page.\nStatic pages are pages that are written in markdown and can be added to blog.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "StaticPage"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the static page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The title of the static page. Shown in nav bar.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The slug of the static page. Used to access static page.  Example https://johndoe.com/my-page",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slug"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Content of the static page. Contains markdown and html version of the static page's content.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "content"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Content"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A flag to determine if the static page is hidden from public or not, this is used to hide the page instead of deleting it.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hidden"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the static page's Open Graph metadata i.e. image.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ogMetaData"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "OpenGraphMetaData"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information about the static page's SEO metadata i.e. title and description.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "seo"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "SEO"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Connection to get list of static pages.\nReturns a list of edges which contains the static page and cursor to the last item of the previous page.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "StaticPageConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of edges containing nodes in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "StaticPageEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Information to aid in pagination.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of documents in the connection.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalDocuments"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An edge that contains a node of type static page and cursor to the node.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "StaticPageEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The node containing a static page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "StaticPage"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A cursor to the last item of the previous page.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Webhook"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the post. Used to uniquely identify the post.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "publication"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Publication"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "events"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "WebhookEvent"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "secret"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Messages that has been sent via this webhook.\nMessages include the request and eventual response.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "messages"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The number of items to be returned per page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A cursor to the last item of the previous page.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "after"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WebhookMessageConnection"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookEvent"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "POST_PUBLISHED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "POST_UPDATED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "POST_DELETED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "STATIC_PAGE_PUBLISHED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "STATIC_PAGE_EDITED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "STATIC_PAGE_DELETED"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookMessageConnection"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "edges"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "WebhookMessageEdge"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "pageInfo"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PageInfo"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Connection"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookMessageEdge"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WebhookMessage"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "cursor"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Edge"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookMessage"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "event"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WebhookEvent"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "True if either the request failed or the response status code was not 2xx.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isError"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "True if the message was sent as a test.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isTest"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "True if the message was resent.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isResent"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "request"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WebhookMessageRequest"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "response"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WebhookMessageResponse"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DateTime"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookMessageRequest"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unique identifier of the request. Can be used to deduplicate requests.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "uuid"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "headers"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "body"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "error"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WebhookMessageRequestError"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookMessageRequestError"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WebhookMessageResponse"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "httpStatus"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "headers"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "body"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The time it took from the moment the request has been send until the first byte of the response has been received.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timeToFirstByteMilliseconds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});