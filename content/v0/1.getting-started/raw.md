**Getting Started**  
- [Introduction](#introduction)  
- [Limitations](#limitations)
- [Setup](#setup)  
    - [Requirements](#requirements)
    - [Installation](#installation)
    - [Configuration](#configuration)


**Core Concepts**
- [I18n System](#i18n-system)
- [System Flow](#system-flow)
- [Fallback](#fallback)


**Usage**
- [Messages](#messages)
    - [Static Messages](#static-messages)
    - [Dynamic Messages](#dynamic-messages)
- [Interpolation](#interpolation)
    - [Indexed Data](#indexed-data)
    - [Named Data](#named-data)
    - [Linked Message](#linked-message)
- [Pluralization](#pluralization)
    - [Basic](#basic)
    - [Real-Time](#real-time)
- [Drawing](#drawing)
    - [Direct Drawing](#direct-drawing)
    - [Drawing Preset](#drawing-preset)
- [Localized Assets](#localized-assets)
- [Locale Switching](#locale-switching)


**Advanced**
- [Nested Message Data](#nested-message-data)
- [Dictionaries](#dictionaries)
- [Optimizations](#optimizations)
- [Extending & Customizing](#extending-and-customizing)


**Examples**
- [Real-Time Pluralization](#real-time-pluralization)
- [Gender-based Text](#gender-based-text)


**API Reference**  
- Global Variables  
    - [i18n_name](#i18n_name)  
    - [[i18n_name]](#[i18n_name])  
- Constants
    - [I18N_DRAWING](#i18n_drawing)
    - [I18N_DRAW_TEXT](#i18n_draw_text)
    - [I18N_REF](#i18n_ref)
- Constructors
    - [I18nLocaleInit](#i18nlocaleinit)
    - [I18nLoad](#i18nload)
    - [I18nDrawings](#i18ndrawings)
- Functions
    - [i18n_add_dictionaries](#i18n_add_dictionaries)
    - [i18n_add_drawings](#i18n_add_drawings)
    - [i18n_add_locales](#i18n_add_locale)
    - [i18n_add_messages](#i18n_add_messages)
    - [i18n_create](#i18n_create)
    - [i18n_create_ref_asset](#i18n_create_ref_asset)
    - [i18n_create_ref_message](#i18n_create_ref_message)
    - [i18n_draw_message](#i18n_draw_message)
    - [i18n_use_drawing](#i18n_use_drawing)
    - [i18n_get_asset_from_ref](#i18n_get_asset_from_ref)
    - [i18n_get_drawings](#i18n_get_drawings)
    - [i18n_get_drawings_data](#i18n_get_drawings_data)
    - [i18n_get_drawing_preset](#i18n_get_drawing_preset)
    - [i18n_get_locale](#i18n_get_locale)
    - [i18n_get_locales](#i18n_get_locales)
    - [i18n_get_locales_code](#i18n_get_locales_code)
    - [i18n_get_locales_name](#i18n_get_locales_name)
    - [i18n_get_messages](#i18n_get_messages)
    - [i18n_get_message_from_ref](#i18n_get_message_from_ref)
    - [i18n_get_ref_asset](#i18n_get_ref_asset)
    - [i18n_get_ref_message](#i18n_get_ref_message)
    - [i18n_is_ready](#i18n_is_ready)
    - [i18n_locale_exists](#i18n_locale_exists)
    - [i18n_message_exists](#i18n_message_exists)
    - [i18n_set_default_message](#i18n_set_default_message)
    - [i18n_set_locale](#i18n_set_locale)
    - [i18n_update_drawings](#i18n_update_drawings)
    - [i18n_update_loader](#i18n_update_loader)
    - [i18n_update_plurals](#i18n_update_plurals)
    - [i18n_update_refs](#i18n_update_refs)
        - To add:
        - [i18n_choose](#i18n_choose)
        - [i18n_update_fonts](#i18n_update_fonts)
        - [i18n_update_data](#i18n_update_data)
        - [i18n_clear_cache](#i18n_clear_cache)
        - [i18n_get_message_from_cache](#i18n_get_message_from_cache)
        - [i18n_load_locale](#i18n_load_locale)
        - [i18n_unload_locale](#i18n_unload_locale)

