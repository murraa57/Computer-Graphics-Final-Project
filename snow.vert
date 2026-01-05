#version 330 core

layout(location = 0) in vec3 aPosition;
layout(location = 1) in float aSize;

uniform mat4 MVP;

void main() {
    gl_Position = MVP * vec4(aPosition, 1.0);
    gl_PointSize = aSize;  
}
