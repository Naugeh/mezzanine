from mezzanine.conf import register_setting
from django.utils.translation import ugettext_lazy as _

register_setting(
    name="TEMPLATE_ACCESSIBLE_SETTINGS",
    append=True,
    default=("SITE_TITLE",),
)


register_setting(
    name="SITE_TITLE",
    description="The website title",
    default="नवगेह - अग्निशिखा संहिता",
)

register_setting(
    name="RICHTEXT_ALLOWED_STYLES",
    description=_("List of inline CSS styles that won't be stripped from "
        "``RichTextField`` instances."),
    editable=False,
    default=("border", "color", "display", "float", "list-style-type", "margin",
        "margin-bottom", "margin-left", "margin-right", "margin-top",
        "padding-left", "text-align", "text-decoration", "vertical-align"),
)