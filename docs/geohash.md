# Fundamentos: ¿Qué es Geohash?

## ¿Qué es Geohash?

Geohash es un sistema que convierte coordenadas geográficas (latitud y longitud) en cadenas alfanuméricas únicas, dividiendo un área geográfica en cuadrículas. Este sistema es particularmente útil para análisis espaciales debido a su precisión escalable y simplicidad.

---

## Precisión de Geohash

La precisión de Geohash depende de la longitud de la cadena alfanumérica generada. A mayor longitud, mayor precisión en la delimitación del área geográfica. En este proyecto, utilizamos una precisión de **6** caracteres, que delimita áreas de aproximadamente 1,2 kilómetros por 610 metros.

### Tabla de Precisión
A continuación, se muestra cómo varía la precisión con la longitud de Geohash:

![Tabla de Precisión](/img/geohash-precision.png)

---

## Geohash Aplicado al Proyecto

En el análisis del flujo de personas en Buenos Aires, dividimos la ciudad utilizando Geohash. Esto permitió identificar las zonas más frecuentadas basándonos en las coordenadas de las estaciones de subte.

### Mapa de Buenos Aires con Geohash (Precisión 4)
Con una precisión de 4 caracteres, Buenos Aires se divide en cuadrículas grandes, ideales para análisis iniciales y patrones generales.

![Mapa Geohash Precisión 4](/img/geohash-01.png)

### Mapa de Buenos Aires con Geohash (Precisión 6)
Para un análisis más detallado, utilizamos una precisión de 6 caracteres, que permitió identificar áreas específicas alrededor de estaciones de subte. Esto fue fundamental para el cálculo de zonas calientes y la proyección de tráfico.

![Mapa Geohash Precisión 6](/img/geohash-precision-6.png)

---

## Ventajas de Usar Geohash

1. **Estandarización**:
   - Organiza datos espaciales en un formato uniforme.
2. **Escalabilidad**:
   - Compatible con áreas grandes y pequeñas.
3. **Análisis Eficiente**:
   - Ideal para identificar patrones y tendencias espaciales.

---

## Conclusión

Geohash fue una herramienta esencial en este proyecto para dividir y analizar los datos geográficos. Nos permitió identificar patrones clave en las zonas de mayor tráfico peatonal, brindando la base para nuestras recomendaciones estratégicas.
