#version 330 core

// To add colour and UV input to this fragment shader 
in vec3 color;
in vec2 uv;

// To add the texture sampler
uniform sampler2D textureSampler;

// Output colour
out vec3 finalColor;

void main()
{
	// Texture lookup
	// finalColor = color * texture(textureSampler, uv).rgb;
	finalColor = texture(textureSampler, uv).rgb;
}
