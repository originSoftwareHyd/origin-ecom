// Right-to-left pages point the arrow the other way; its hover motion is mirrored in rtl.css.
export default function Arrow({ rtl = false }) { return <span aria-hidden="true">{rtl ? '↖' : '↗'}</span> }
