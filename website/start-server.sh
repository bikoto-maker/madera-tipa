#!/bin/bash

# Script para iniciar el servidor web local
# Uso: bash start-server.sh

echo "======================================"
echo "Iniciando servidor web local..."
echo "======================================"
echo ""

# Detectar el sistema operativo y puerto disponible
PORT=8000

# Función para iniciar con Python
start_python_server() {
    echo "✓ Usando Python para servir el sitio"
    echo "✓ Abriendo navegador en http://localhost:$PORT"
    echo ""
    echo "Para detener el servidor, presiona CTRL+C"
    echo ""
    
    # Intenta Python 3 primero
    if command -v python3 &> /dev/null; then
        python3 -m http.server $PORT
    elif command -v python &> /dev/null; then
        python -m SimpleHTTPServer $PORT
    else
        echo "❌ Python no está instalado."
        start_with_node
    fi
}

# Función para iniciar con Node.js
start_with_node() {
    if command -v npx &> /dev/null; then
        echo "✓ Usando Node.js para servir el sitio"
        echo "✓ Instalando http-server..."
        npx http-server -p $PORT
    else
        echo "❌ Ni Python ni Node.js están instalados."
        echo "Por favor instala uno de estos:"
        echo "  - Python: https://www.python.org/downloads/"
        echo "  - Node.js: https://nodejs.org/"
        exit 1
    fi
}

# Detectar SO y abrir navegador
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open "http://localhost:$PORT" 2>/dev/null &
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open "http://localhost:$PORT" 2>/dev/null &
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    # Windows
    start "http://localhost:$PORT"
fi

# Iniciar servidor
start_python_server
