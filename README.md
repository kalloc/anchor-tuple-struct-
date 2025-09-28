Hi, stranger!

This repo just show that how defined type with tuple struct value would be encoded:


IDL:
```json
{
  "address": "6hJjKJP3gxGQnCk7bY4Yn47mMpuiwvt3mYErGsayFsad",
  "metadata": {
    "name": "xxx",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "InitializeArgs"
            }
          }
        }
      ]
    }
  ],
  "types": [
    {
      "name": "InitializeArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "track_volume",
            "type": {
              "defined": {
                "name": "OptionBool"
              }
            }
          }
        ]
      }
    },
    {
      "name": "OptionBool",
      "type": {
        "kind": "struct",
        "fields": [
          "bool"
        ]
      }
    }
  ]
}
```


Encoding result:
- Track volume is false =  afaf6d1f0d989bed00
- Track volume is true =  afaf6d1f0d989bed01
