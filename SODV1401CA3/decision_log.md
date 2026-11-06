# Decision Log

## Embed Choice

I selected OpenStreetMap as the embedded map solution because it is free, easy to implement, and does not require an API key. OpenStreetMap provides responsive map embedding and supports privacy-conscious configurations through iframe attributes.

## API Choice

I selected Open-Meteo to provide real-time weather information. Open-Meteo is free to use, does not require an API key, and integrates easily with JavaScript Fetch API requests. The API provides live temperature, wind speed, and weather condition information.

## Privacy Measures

The embedded map uses:

- loading="lazy"
- referrerpolicy="no-referrer"
- sandbox attributes

These measures reduce tracking and restrict embedded content permissions.

Residual third-party tracking may still occur because OpenStreetMap receives requests when the embedded map is loaded. This may expose browser information and IP addresses to the service provider.

## Performance Optimizations

The following optimizations were implemented:

- Lazy loading for embedded content.
- Responsive iframe sizing.
- Responsive hero image sizing.
- WebP image support with JPEG fallback.
- Minimal CSS and JavaScript assets.
- No unnecessary third-party libraries.

## SEO and AIO Metadata

The following metadata was added:

- Title tag
- Meta description
- Canonical tag
- Robots meta tag
- Open Graph title
- Open Graph description
- Open Graph type

These tags help search engines and AI systems understand website content and improve discoverability.

## Lighthouse Results

Target scores:

- Performance ≥ 90
- SEO ≥ 90

Results:

To be completed after Lighthouse testing.