# Usamos una imagen base de Python
FROM python:3.8-slim

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de la aplicación al contenedor
COPY . .

# Instalamos las dependencias
RUN pip install --upgrade pip && pip install -r requirements.txt

# Exponemos el puerto 8080
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
