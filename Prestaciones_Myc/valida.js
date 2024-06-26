// Objeto que contiene las veredas o localidades de cada municipio y su tipo de territorio
var municipiosData = {
    'BOGOTA': [
        ['ENGATIVA', 'URBANO'],
        ['FONTIBON', 'URBANO'],
        ['VEREDA EL VERJON DE TEUSACA', 'RURAL CON DIFICULTAD'],
        ['LLANITOS', 'RURAL CON DIFICULTAD'],
        ['AURAS', 'RURAL'],
        ['BARRIOS UNIDOS', 'URBANO'],
        ['CANDELARIA', 'URBANO'],
        ['CHAPINERO', 'URBANO'],
        ['PUENTE ARANDA', 'URBANO'],
        ['SANTA FE', 'URBANO'],
        ['TEUSAQUILLO', 'URBANO'],
        ['MÁRTIRES', 'URBANO'],
        ['SUBA', 'URBANO'],
        ['USAQUEN', 'URBANO'],
        ['BOSA', 'URBANO'],
        ['KENNEDY', 'URBANO'],
        ['CIUDAD BOLIVAR', 'URBANO'],
        ['TUNJUELITO', 'URBANO'],
        ['USME', 'URBANO'],
        ['ANTONIO NARIÑO', 'URBANO'],
        ['SAN CRISTOBAL', 'URBANO'],
        ['RAFAEL URIBE', 'URBANO'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR LOS PATICOS', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR MOCHUELO ALTO', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR PASQUILLITA', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR QUIBA', 'RURAL'],
        ['DISTRITO CAPITAL - CIUDAD BOLIVAR SANTA ROSA', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ BETANIA', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ CAPITOLIO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ CHORRERAS', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ EL PILAR', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ EL RAIZAL', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ EL SALITRE', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ EL TOLDO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ GRANADA', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ ISTMO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ LA UNION', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ LAGUNA VERDE', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ LAGUNITAS', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ PALMAS', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ PEÑALIZA', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ RIOS', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ SAN ANTONIO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ SAN JOSE', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ SANTA ROSA ALTA', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ SANTO DOMINGO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ SIN VEREDAS', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ TABACO', 'RURAL CON DIFICULTAD'],
        ['DISTRITO CAPITAL - SUMAPAZ TUNAL ALTO', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ TUNAL BAJO', 'RURAL'],
        ['DISTRITO CAPITAL - SUMAPAZ VEGAS', 'RURAL'],
        ['MOCHUELO BAJO', 'RURAL'],
        ['NAZARETH', 'RURAL CON DIFICULTAD'],
        ['PASQUILLA', 'RURAL'],
        ['SAN JUAN DE SUMAPAZ', 'RURAL CON DIFICULTAD']
    ],
    'BOJACA': [
        ['FUTE', 'RURAL CON DIFICULTAD'],
        ['BARRO BLANCO', 'RURAL CON DIFICULTAD'],
        ['SANTA BARBARA', 'RURAL CON DIFICULTAD'],
        ['SAN ANTONIO', 'RURAL CON DIFICULTAD'],
        ['CORTES', 'RURAL CON DIFICULTAD'],
        ['CUBIA', 'RURAL CON DIFICULTAD'],
        ['BOBACE', 'RURAL CON DIFICULTAD']
    ],
    'CAJICA': [
        ['CASCO URBANO', 'URBANO'],
        ['CANELON', 'URBANO'],
        ['CHUNTAME', 'URBANO CON DIFICULTAD'],
        ['RIO GRANDE', 'URBANO'],
        ['CALAHORRA', 'URBANO'],
        ['LA ESTACION', 'URBANO'],
        ['EL MISTERIO', 'URBANO CON DIFICULTAD'],
        ['PUERTA DEL SOL', 'URBANO CON DIFICULTAD'],
        ['GRAN COLOMBIA', 'URBANO CON DIFICULTAD'],
        ['GRANJITAS', 'URBANO CON DIFICULTAD'],
        ['EL PRADO', 'URBANO'],
        ['SANTA INES', 'URBANO'],
        ['SANTA CRUZ', 'URBANO'],
        ['EL ROCIO', 'URBANO'],
        ['LA PALMA', 'URBANO CON DIFICULTAD'],
        ['LAS VILLAS', 'URBANO'],
        ['RIO FRIO LA FLORIDA', 'URBANO CON DIFICULTAD'],
        ['PUENTE VARGAS', 'URBANO CON DIFICULTAD']
    ],
    'CHIA': [
        ['CASCO URBANO CHÍA', 'URBANO'],
        ['CERCA DE PIEDRA', 'URBANO'],
        ['FAGUA', 'URBANO'],
        ['FONQUETÁ', 'URBANO'],
        ['FUSCA', 'URBANO'],
        ['LA BALSA', 'URBANO'],
        ['SAMARIA', 'URBANO'],
        ['TÍQUIZA', 'URBANO'],
        ['YERBABUENA', 'URBANO'],
        ['BOJACA', 'URBANO']
    ],
    'CHIPAQUE': [
        ['QUENTE', 'RURAL CON DIFICULTAD'],
        ['CALDERITAS', 'RURAL CON DIFICULTAD'],
        ['POTRERO GRANDE', 'RURAL CON DIFICULTAD']
    ],
    'CHOACHI': [
        ['LAS JUNTAS', 'RURAL CON DIFICULTAD'],
        ['CARTAGENA', 'RURAL CON DIFICULTAD'],
        ['SAN FRANCISCO', 'RURAL CON DIFICULTAD']
    ],
    'COGUA': [
        ['PARAMO ALTO', 'RURAL CON DIFICULTAD'],
        ['RODAMONTAL', 'RURAL CON DIFICULTAD'],
        ['SUSAGUA', 'RURAL CON DIFICULTAD'],
        ['RINCÓN SANTO', 'RURAL CON DIFICULTAD'],
        ['CASCO URBANO COGUA', 'RURAL CON DIFICULTAD'],
        ['NEUSA', 'RURAL CON DIFICULTAD'],
        ['MORTIÑO', 'RURAL CON DIFICULTAD']
    ],
    'COTA': [
        ['CASCO URBANO COTA', 'URBANO CON DIFICULTAD'],
        ['CETIME', 'URBANO CON DIFICULTAD'],
        ['EL ABRA', 'URBANO CON DIFICULTAD'],
        ['LA MOYA', 'URBANO CON DIFICULTAD'],
        ['PARCELAS', 'URBANO CON DIFICULTAD'],
        ['PUEBLO VIEJO', 'URBANO CON DIFICULTAD'],
        ['ROZO', 'URBANO CON DIFICULTAD'],
        ['SIBERIA', 'URBANO CON DIFICULTAD'],
        ['VUELTA GRANDE', 'URBANO CON DIFICULTAD']
    ],
    'EL ROSAL': [
        ['CAMPO ALEGRE', 'RURAL CON DIFICULTAD'],
        ['SAN ANTONIO', 'RURAL CON DIFICULTAD'],
        ['SANTA BARBARA', 'RURAL CON DIFICULTAD'],
        ['EL RODEO', 'RURAL CON DIFICULTAD'],
        ['LA CUESTA', 'RURAL CON DIFICULTAD']
    ],
    'FACATATIVA': [
        ['EL CORZO', 'RURAL CON DIFICULTAD'],
        ['MOYANO', 'RURAL CON DIFICULTAD'],
        ['PASO ANCHO', 'RURAL CON DIFICULTAD']
    ],
    'FUNZA': [
        ['CACIQUE', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO FUNZA', 'URBANO CON DIFICULTAD'],
        ['EL CERRITO', 'URBANO CON DIFICULTAD'],
        ['EL CLOCLI', 'URBANO CON DIFICULTAD'],
        ['FLORIDA', 'URBANO CON DIFICULTAD'],
        ['FRAGUA', 'URBANO CON DIFICULTAD'],
        ['LA FRAGUA', 'URBANO CON DIFICULTAD'],
        ['SIETE TROJES', 'URBANO CON DIFICULTAD']
    ],
    'FUSAGASUGA': [
        ['LOS ROBLES', 'RURAL CON DIFICULTAD']
    ],
    'GACHANCIPA': [
        ['SAN JOSÉ', 'RURAL CON DIFICULTAD'],
        ['SAN MARTÍN', 'RURAL CON DIFICULTAD'],
        ['CASCO URBANO GACHANCIPÁ', 'RURAL CON DIFICULTAD'],
        ['EL ROBLE', 'RURAL CON DIFICULTAD'],
        ['SANTA BÁRBARA', 'RURAL CON DIFICULTAD'],
        ['SAN BARTOLOMÉ', 'RURAL CON DIFICULTAD']
    ],
    'GRANADA': [
        ['CARRIZAL', 'RURAL CON DIFICULTAD'],
        ['SABANETA', 'RURAL CON DIFICULTAD'],
        ['SANTAFE', 'RURAL CON DIFICULTAD']
    ],
    'GUASCA': [
        ['SANTUARIO', 'RURAL CON DIFICULTAD'],
        ['MARIANO OSPINA', 'RURAL CON DIFICULTAD'],
        ['SAN ISIDRO', 'RURAL CON DIFICULTAD'],
        ['SANTA LUCIA', 'RURAL CON DIFICULTAD'],
        ['SALITRE', 'RURAL CON DIFICULTAD'],
        ['SANTA ISABEL', 'RURAL CON DIFICULTAD'],
        ['TRINIDAD', 'RURAL CON DIFICULTAD']
    ],
    'LA CALERA': [
        ['ALTAMAR', 'RURAL'],
        ['AURORA BAJA', 'RURAL'],
        ['AURORA ALTA', 'RURAL'],
        ['BUENOS AIRES', 'RURAL CON DIFICULTAD'],
        ['CAMINO AL META', 'RURAL CON DIFICULTAD'],
        ['EL HATO', 'RURAL CON DIFICULTAD'],
        ['EL LIBANO', 'RURAL CON DIFICULTAD'],
        ['EL MANZANO', 'RURAL CON DIFICULTAD'],
        ['EL RODEO', 'RURAL'],
        ['EL SALITRE', 'RURAL CON DIFICULTAD'],
        ['EL TRIUNFO', 'RURAL'],
        ['EL VOLCAN', 'RURAL CON DIFICULTAD'],
        ['FRAILEJONAL', 'RURAL CON DIFICULTAD'],
        ['JERUSALEN', 'RURAL CON DIFICULTAD'],
        ['LA HOYA', 'RURAL CON DIFICULTAD'],
        ['LA JANGADA', 'RURAL CON DIFICULTAD'],
        ['LA JUNIA', 'RURAL CON DIFICULTAD'],
        ['LA POLONIA', 'RURAL CON DIFICULTAD'],
        ['LA PORTADA', 'RURAL CON DIFICULTAD'],
        ['LA RAMADA', 'RURAL'],
        ['LA TOMA', 'RURAL'],
        ['MARQUEZ', 'RURAL'],
        ['MUNDO NUEVO', 'RURAL CON DIFICULTAD'],
        ['QUISQUIZA', 'RURAL CON DIFICULTAD'],
        ['SAN CAYETANO', 'RURAL CON DIFICULTAD'],
        ['SAN JOSE LA CONCEPCION', 'RURAL CON DIFICULTAD'],
        ['SAN RAFAEL', 'RURAL CON DIFICULTAD'],
        ['SANTA HELENA', 'RURAL CON DIFICULTAD'],
        ['TREINTA Y SEIS', 'RURAL CON DIFICULTAD'],
        ['TUNJAQUE', 'RURAL CON DIFICULTAD']
    ],
    'MADRID': [
        ['CASCO URBANO MADRID', 'URBANO'],
        ['LOS ÁRBOLES', 'RURAL'],
        ['LA CUESTA', 'RURAL'],
        ['CARRASQUILLITA', 'RURAL'],
        ['VALLE DEL ABRA', 'RURAL'],
        ['PUENTE PIEDRA', 'RURAL'],
        ['CHAUTA (SECTOR LA ISLA)', 'RURAL'],
        ['LAS MERCEDES', 'RURAL'],
        ['LA ESTANCIA', 'RURAL'],
        ['BOYERO', 'RURAL'],
        ['BEBEDEROS', 'RURAL'],
        ['LAGUNA LARGA (EL PORVENIR)', 'RURAL'],
        ['EL MOYANO', 'RURAL'],
        ['SANTA CRUZ', 'RURAL'],
        ['LA PUNTA', 'RURAL'],
        ['POTREROGRANDE (EL PEDREGAL)', 'RURAL'],
        ['EL CORZO', 'RURAL']
    ],
    'MOSQUERA': [
        ['BALSILLAS', 'RURAL'],
        ['CASCO URBANO MOSQUERA', 'URBANO'],
        ['LOS PUENTES', 'RURAL'],
        ['SAN FRANCISCO', 'RURAL'],
        ['SAN JOSE - EL PLAYON', 'RURAL'],
        ['SAN JOSE - LA MAJADA', 'RURAL'],
        ['SAN JOSE - PARCELAS', 'RURAL'],
        ['SIETE TROJES', 'RURAL'],
        ['EL DIAMANTE', 'RURAL'],
        ['LA VICTORIA', 'RURAL'],
        ['SAN JORGE', 'RURAL'],
    ],
    'PACHO': [
        ['CANADÁ', 'RURAL CON DIFICULTAD'],
        ['CERRO NEGRO', 'RURAL CON DIFICULTAD'],
        ['EL BOSQUE', 'RURAL CON DIFICULTAD']
    ],
    'PASCA': [
        ['COLORADOS ALTO', 'RURAL CON DIFICULTAD'],
        ['COLORADOS BAJO', 'RURAL CON DIFICULTAD']
    ],
    'SAN ANTONIO DEL TEQUENDAMA': [
        ['LA RÁPIDA', 'RURAL CON DIFICULTAD'],
        ['ARRACACHAL', 'RURAL CON DIFICULTAD'],
        ['CUSIO', 'RURAL CON DIFICULTAD'],
        ['CHICAQUE', 'RURAL CON DIFICULTAD']
    ],
    'SIBATE': [
        ['CASCO URBANO SIBATÉ', 'URBANO CON DIFICULTAD'],
        ['ALTO CHARCO', 'RURAL'],
        ['BRADAMONTE', 'RURAL'],
        ['EL PEÑON', 'RURAL'],
        ['LA CHACUA', 'RURAL'],
        ['LA UNION', 'RURAL'],
        ['LAS DELICIAS', 'RURAL'],
        ['PERICO', 'RURAL'],
        ['ROMERAL', 'RURAL'],
        ['SAN BENITO', 'RURAL'],
        ['SAN EUGENIO', 'RURAL'],
        ['SAN FORTUNATO', 'RURAL'],
        ['SAN MIGUEL', 'RURAL'],
        ['SAN RAFAEL', 'RURAL'],
        ['USABA', 'RURAL'],
        ['EL PEÑÓN', 'RURAL CON DIFICULTAD']
    ],
    'SILVANIA': [
        ['AGUA BONITA', 'RURAL CON DIFICULTAD'],
        ['VICTORIA ALTA', 'RURAL CON DIFICULTAD'],
        ['FU', 'RURAL CON DIFICULTAD'],
        ['JALISCO', 'RURAL CON DIFICULTAD'],
        ['NORUEGA ALTA', 'RURAL CON DIFICULTAD']
    ],
    'SOACHA': [
        ['ALTO DE LA CRUZ', 'URBANO CON DIFICULTAD'],
        ['ALTO DEL CABRA', 'URBANO CON DIFICULTAD'],
        ['BOCHICA', 'URBANO CON DIFICULTAD'],
        ['BOSATOMA', 'URBANO CON DIFICULTAD'],
        ['BOSATOMA - POTRERO - SAN JOSE', 'URBANO CON DIFICULTAD'],
        ['CANOAS SAENZ', 'URBANO CON DIFICULTAD'],
        ['CARRIZAL', 'URBANO CON DIFICULTAD'],
        ['CHACUA', 'URBANO CON DIFICULTAD'],
        ['EL CHARQUITO', 'URBANO CON DIFICULTAD'],
        ['EL ROMERAL', 'URBANO CON DIFICULTAD'],
        ['GRANADA', 'URBANO CON DIFICULTAD'],
        ['GUASIMAL', 'URBANO CON DIFICULTAD'],
        ['LA CABRERA LOTE. 19 MZ J.', 'URBANO CON DIFICULTAD'],
        ['LA HUNGRIA', 'URBANO CON DIFICULTAD'],
        ['PANAMA', 'URBANO CON DIFICULTAD'],
        ['SABANETA', 'URBANO CON DIFICULTAD'],
        ['SAN FRANCISCO', 'URBANO CON DIFICULTAD'],
        ['SAN JORGE', 'URBANO CON DIFICULTAD'],
        ['SAN JOSE ALTO', 'URBANO CON DIFICULTAD'],
        ['SAN JOSE BAJO', 'URBANO CON DIFICULTAD'],
        ['SAN RAIMUNDO', 'URBANO CON DIFICULTAD'],
        ['SANTA FE', 'URBANO CON DIFICULTAD'],
        ['SANTA HELENA', 'URBANO CON DIFICULTAD'],
        ['TINZUQUE O VILLA NUEVA', 'URBANO CON DIFICULTAD']
    ],
    'SOPO': [
        ['HATO GRANDE', 'URBANO CON DIFICULTAD'],
        ['APOSENTOS', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO SOPO', 'URBANO CON DIFICULTAD'],
        ['PUEBLO VIEJO', 'URBANO CON DIFICULTAD'],
        ['LA CAROLINA', 'URBANO CON DIFICULTAD'],
        ['CENTRO ALTO', 'URBANO CON DIFICULTAD'],
        ['EL CHUSCAL', 'URBANO CON DIFICULTAD'],
        ['GRATAMIRA', 'URBANO CON DIFICULTAD'],
        ['LA VIOLETA', 'URBANO CON DIFICULTAD'],
        ['MERCENARIO', 'RURAL'],
        ['MEUSA', 'URBANO CON DIFICULTAD'],
        ['EL HOYITO', 'URBANO CON DIFICULTAD'],
        ['BELLAVISTA', 'URBANO CON DIFICULTAD'],
        ['SAN GABRIEL', 'RURAL']
    ],
    'SUBACHOQUE': [
        ['SANTUARIO LA CUESTA', 'RURAL CON DIFICULTAD'],
        ['GALDÁMEZ', 'RURAL CON DIFICULTAD'],
        ['CANICA BAJA', 'RURAL CON DIFICULTAD'],
        ['CANICA ALTA', 'RURAL CON DIFICULTAD'],
        ['LA UNIÓN', 'RURAL CON DIFICULTAD']
    ],
    'SUMAPAZ': [
        ['SANTA ROSA ALTA', 'RURAL CON DIFICULTAD'],
        ['SANTA ROSA BAJA', 'RURAL CON DIFICULTAD']
    ],
    'TABIO': [
        ['LLANO GRANDE', 'RURAL'],
        ['RIO FRIO OCCIDENTAL', 'RURAL'],
        ['RIO FRIO ORIENTAL', 'URBANO CON DIFICULTAD'],
        ['SALITRE', 'RURAL'],
        ['CENTRO', 'URBANO CON DIFICULTAD'],
        ['LOURDES', 'URBANO CON DIFICULTAD'],
        ['JUAICA', 'URBANO CON DIFICULTAD'],
        ['PALO VERDE', 'URBANO CON DIFICULTAD']
    ],
    'TENJO': [
        ['CASCO URBANO DE TENJO', 'URBANO'],
        ['CARRASQUILLITA', 'RURAL'],
        ['CHINCE', 'RURAL'],
        ['CHITASUGA', 'RURAL'],
        ['CHUCUA', 'RURAL'],
        ['CHURUGUACO ALTO', 'RURAL'],
        ['CHURUGUACO BAJO', 'RURAL'],
        ['EL CHACAL', 'RURAL'],
        ['EL ESTANCO', 'RURAL'],
        ['GUANGATA', 'RURAL'],
        ['JACALITO', 'RURAL'],
        ['JUAICA', 'RURAL'],
        ['LA PUNTA', 'RURAL'],
        ['MARTIN Y ESPINO', 'RURAL'],
        ['POVEDA1', 'RURAL'],
        ['POVEDA2', 'RURAL'],
        ['SANTA CRUZ', 'RURAL']
    ],
    'TOCANCIPA': [
        ['CANAVITA', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO TOCANCIPA', 'URBANO CON DIFICULTAD'],
        ['EL PORVENIR', 'URBANO CON DIFICULTAD'],
        ['LA ESMERALDA', 'URBANO CON DIFICULTAD'],
        ['LA FUENTE', 'URBANO CON DIFICULTAD'],
        ['TIBITOC', 'URBANO CON DIFICULTAD'],
        ['VERGANZO', 'URBANO CON DIFICULTAD']
    ],
    'ZIPAQUIRA': [
        ['BARRO BLANCO', 'URBANO CON DIFICULTAD'],
        ['CASCO URBANO ZIPAQUIRÁ', 'URBANO CON DIFICULTAD'],
        ['EL EMPALIZADO', 'RURAL'],
        ['EL RUDAL', 'URBANO CON DIFICULTAD'],
        ['EL TUNAL', 'RURAL'],
        ['LA GRANJA', 'URBANO CON DIFICULTAD'],
        ['LOTEO BANOY', 'URBANO CON DIFICULTAD'],
        ['LOTEO MALAGÓN', 'URBANO CON DIFICULTAD'],
        ['LOTEO PEDROZA', 'URBANO CON DIFICULTAD'],
        ['LOTEO SUSAGUA', 'URBANO CON DIFICULTAD'],
        ['PÁRAMO DE GUERRERO', 'RURAL CON DIFICULTAD'],
        ['SANTA ISABEL I', 'URBANO CON DIFICULTAD'],
        ['PASOANCHO', 'URBANO CON DIFICULTAD'],
        ['RÍO FRÍO', 'RURAL'],
        ['RIVERA DE SUSAGUA', 'URBANO CON DIFICULTAD'],
        ['SAN GABRIEL', 'URBANO CON DIFICULTAD'],
        ['SAN ISIDRO', 'RURAL'],
        ['SAN JORGE', 'URBANO CON DIFICULTAD'],
        ['SAN MIGUEL', 'URBANO CON DIFICULTAD'],
        ['SANTIAGO PÉREZ', 'URBANO CON DIFICULTAD'],
        ['VENTALARGA', 'URBANO CON DIFICULTAD'],
        ['SANTA CLARA', 'RURAL'],
        ['PRADOS DEL MIRADOR', 'URBANO CON DIFICULTAD'],
        ['SAN LUIS', 'URBANO CON DIFICULTAD'],
        ['LA LOMITA', 'URBANO CON DIFICULTAD'],
        ['EL MORTIÑO', 'URBANO CON DIFICULTAD']
    ]    
};

function cargarVeredas() {
    var municipioSeleccionado = document.getElementById('municipios').value;
    var veredasSelect = document.getElementById('veredas');
    var tipoTerritorioSpan = document.getElementById('tipoTerritorio');

    // Limpiar las opciones anteriores y el tipo de territorio
    veredasSelect.innerHTML = '<option value="">-- Selecciona --</option>';
    tipoTerritorioSpan.textContent = '';

    var tablasIDs = [
        'actividadesUrbanas',
        'actividadesUrbanasConDificultad',
        'actividadesRurales',
        'actividadesRuralesConDificultad'
    ];
       // Ocultar y destruir todas las tablas de actividades
       tablasIDs.forEach(function(id) {
        var table = document.getElementById(id);
        if (table) {
            // Ocultar la tabla
            table.style.display = 'none';
            // Destruir DataTable existente si existe
            if ($.fn.DataTable.isDataTable('#' + id)) {
                $('#' + id).DataTable().destroy();
            }
        }
    });
    
    // Verificar si se seleccionó un municipio
    if (municipioSeleccionado && municipiosData[municipioSeleccionado]) {
        // Obtener las veredas o localidades del municipio seleccionado
        var veredas = municipiosData[municipioSeleccionado];

        // Agregar las opciones al elemento select
        for (var i = 0; i < veredas.length; i++) {
            var option = document.createElement('option');
            option.value = veredas[i][0];
            option.text = veredas[i][0];
            veredasSelect.add(option);
        }

        // Mostrar el tipo de territorio de la primera vereda o localidad
        tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[0][1];

        // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
    }
}

// Función para cargar el tipo de territorio al seleccionar una vereda
function cargarTipoTerritorio() {
    var municipioSeleccionado = document.getElementById('municipios').value;
    var veredaSeleccionada = document.getElementById('veredas').value;
    var tipoTerritorioSpan = document.getElementById('tipoTerritorio');
    var actividadesUrbanasTable = document.getElementById('actividadesUrbanas');
    var actividadesUrbanasConDificultadTable = document.getElementById('actividadesUrbanasConDificultad');
    var actividadesRuralesTable = document.getElementById('actividadesRurales');
    var actividadesRuralesConDificultadTable = document.getElementById('actividadesRuralesConDificultad');


    // Ocultar la tabla de actividades urbanas


    // Verificar si se seleccionó un municipio y una vereda
    if (municipioSeleccionado && veredaSeleccionada && municipiosData[municipioSeleccionado]) {
        // Buscar el tipo de territorio correspondiente a la vereda seleccionada
        var veredas = municipiosData[municipioSeleccionado];
        for (var i = 0; i < veredas.length; i++) {
            if (veredas[i][0] === veredaSeleccionada) {
                // Mostrar el tipo de territorio
                tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[i][1];   
            }
        }
    }

        // Ocultar la tabla de actividades urbanas
    actividadesUrbanasTable.style.display = 'none';
    // Verificar si se seleccionó un municipio y una vereda
    if (municipioSeleccionado && veredaSeleccionada && municipiosData[municipioSeleccionado]) {
        // Buscar el tipo de territorio correspondiente a la vereda seleccionada
        var veredas = municipiosData[municipioSeleccionado];
        for (var i = 0; i < veredas.length; i++) {
            if (veredas[i][0] === veredaSeleccionada) {
                // Mostrar el tipo de territorio
                tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[i][1];

                // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
                if (veredas[i][1] === 'URBANO') {                   
                    cargarActividadesUrbanas();
                }

                break;
            }
        }
    }

    // Ocultar la tabla de actividades urbanas CON DIFICULTAD
    actividadesUrbanasConDificultadTable.style.display = 'none';
    // Verificar si se seleccionó un municipio y una vereda
    if (municipioSeleccionado && veredaSeleccionada && municipiosData[municipioSeleccionado]) {
        // Buscar el tipo de territorio correspondiente a la vereda seleccionada
        var veredas = municipiosData[municipioSeleccionado];
        for (var i = 0; i < veredas.length; i++) {
            if (veredas[i][0] === veredaSeleccionada) {
                // Mostrar el tipo de territorio
                tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[i][1];

                // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
                if (veredas[i][1] === 'URBANO CON DIFICULTAD') {
                    cargarActividadesUrbanasConDificultad();
                }

                break;
            }
        }
    }   
    
    // Ocultar la tabla de actividades Rurales
    actividadesRuralesTable.style.display = 'none';
    // Verificar si se seleccionó un municipio y una vereda
    if (municipioSeleccionado && veredaSeleccionada && municipiosData[municipioSeleccionado]) {
        // Buscar el tipo de territorio correspondiente a la vereda seleccionada
        var veredas = municipiosData[municipioSeleccionado];
        for (var i = 0; i < veredas.length; i++) {
            if (veredas[i][0] === veredaSeleccionada) {
                // Mostrar el tipo de territorio
                tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[i][1];

                // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
                if (veredas[i][1] === 'RURAL') {
                    cargarActividadesRurales();
                }

                break;
            }
        }
    }    

    // Ocultar la tabla de actividades Rurales Con dificultad
    actividadesRuralesConDificultadTable.style.display = 'none';
    // Verificar si se seleccionó un municipio y una vereda
    if (municipioSeleccionado && veredaSeleccionada && municipiosData[municipioSeleccionado]) {
        // Buscar el tipo de territorio correspondiente a la vereda seleccionada
        var veredas = municipiosData[municipioSeleccionado];
        for (var i = 0; i < veredas.length; i++) {
            if (veredas[i][0] === veredaSeleccionada) {
                // Mostrar el tipo de territorio
                tipoTerritorioSpan.textContent = 'Tipo Territorio: ' + veredas[i][1];

                // Verificar si el tipo de territorio es URBANO para mostrar la tabla de actividades
                if (veredas[i][1] === 'RURAL CON DIFICULTAD') {
                    cargarActividadesRuralesConDificultad();
                }

                break;
            }
        }
    }        
}

// Función para cargar las actividades urbanas
function cargarActividadesUrbanas() {
    var actividadesUrbanasTable = document.getElementById('actividadesUrbanas');
    // Limpiar las filas anteriores
    actividadesUrbanasTable.getElementsByTagName('tbody')[0].innerHTML = '';

    // Aquí puedes agregar las filas de la tabla según tus necesidades
    // Ejemplo:
    var actividades = [
        ['OA0001', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0002', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro,  con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación en la copa del árbol aislado con la finalidad de ontrol de altura y/o cercania a las Redes Eléctricas.   El presente baremo comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0003', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0004', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0005', 'LEVANTAMIENTO DE DATOS DE VEGETACIÓN EN LA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Levantamiento, en sitio, de datos relativos a las áreas arborizadas que atraviesan las líneas aéreas de media tensión en conductores desnudos y cables aéreos, y datos relativos a árboles aislados con interferencia fuera de las áreas arborizadas; los datos a levantar son:  • Longitud de las áreas arborizadas en la línea principal o líneas de derivación. • Tipo de conductor (desnudo o cable aéreo) de la línea que pasa por el área arborizada. • Presencia de área arborizada bilateral o de un lado solamente. • Especie principal de las áreas arborizadas y de los árboles aislados. • Número de árboles aislados, que interfieren con la franja de ancho comisionado, existentes fuera de las áreas arborizadas.  Los datos se presentan por el contratista en el formato preparado por el Mandante; el contratista también deberá informar sobre la planimetría, proporcionada por el Mandante a una escala adecuada, evidencia de las áreas arborizadas levantadas en correlación con el consecutivo de las áreas arborizadas y no colocado en el formato antes mencionado. La longitud de las áreas no arborizadas es levantada sobre la planimetría a escala adecuada suministrada por el Mandante, después de haber levantado las áreas arborizadas.  esta voz se paga por cada km levantado de líneas aéreas de media tensión.'],
        ['OA0006', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0007', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro, con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado.   El presente baremo NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0008', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0009', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0010', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0011', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN con residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0012', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0013', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0014', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'PROXI-LM', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0015', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0016', 'TALA SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'La tala  comprende el corte total del tronco matriz de un árbol, que por inclinación o mal estado de conservación presenta peligro de daños en su proyección de caída a las redes eléctricas. Este tipo de tala considera un corte del tronco a 60 cm bajo la red BT o AP. Si existe solamente red MT se considera que el corte se deberá realizar a la distancia que garantice que las Redes no sufran daño al caer dicho árbol. Toda Tala debe ser autorizada por el Mandante. La tala está compuesta por las siguientes actividades: • Tramitar en la Municipalidad que corresponda los permisos necesarios para ejecutar el trabajo, el valor cancelado a la Municipalidad será de cargo del mandante. • Contar con la ubicación exacta del árbol en  la zona donde se ejecutará el Trabajo. • Movilización a la zona de trabajo y contar con los elementos necesarios para realizar la tala como por ejemplo: camión  elevador, motosierra,  • Coordinar con el Centro de Operación correspondiente el inicio y el fin de actividades. • Delimitar zona de trabajo, de acuerdo a manual de señalización vial. • Las cuadrillas de podas deben contar con movilización propia, además de algún medio de comunicación con su base y el Mandante. Cada árbol intervenido se considera un evento. Una vez finalizado el trabajo debe elaborar informe y registros ambientales, según el formato contenido en el procedimiento  de mantenimiento o definido por el Mandante, el cual deberá ser enviado en el plazo que indique este último.'],
        ['OA0017', 'SUMINISTRO DE ESPECIES ARBÓREAS POR COMPENSACIÓN', 'PROXI-LM', 'Esta actividad contempla el suministro de una (1) especie arbórea como medida de compensación. Considera las siguientes actividades: • Suministro y siembra de especie nativa (altura del árbol: 50 a 70 cm) según requerimiento de la distribuidora o autoridad ambiental. Incluye toma de registros fotográficos antes y después de realizar la siembra. • Elaboración previa del informe para la autoridad ambiental, plano de acuerdo al requerimiento, levantamiento topográfico, siembra en el sitio asignado por la distribuidora o autoridad ambiental.  • Instalación de plaqueta de identificación, riego, abono y adecuación del terreno inicial.  • Riego y cuidado cuatrimestral del árbol en plantación por un (1) año (3 intervenciones). Incluye replante (resiembra) por muerte de arboles hasta 10% de la siembra.  • Visitas de seguimiento con la autoridad ambiental.  • Elaboración de fichas y presentación y digitación de informes periódicos requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios.'],
        ['OA0018', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS ', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Se paga por árbol individual e incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0019', 'MANTENIMIENTO DE PLANTACIÓN FORESTAL POR ÁRBOL 0,3<=H<=2 M', 'PROXI-LM', 'Mantenimiento de plantación forestal  por árbol hasta 2 m incluye:  plateo 1 m de diámetro, riego y  abono  La resiembra por muerte de arboles se pagara por ítem baremado De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, tratamiento de cortes con cicatrizante, Georeferenciación del árbol, toma de datos dasométricos, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; suministro e instalación de placas de marcación en especies   intervenidas., presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados La Distribuidora o por la autoridad ambiental'],
        ['OA0020', 'VISITA TÉCNICA A TERRENO PARA LA ATENCIÓN DE SOLICITUDES FORESTALES ', 'PROXI-LM', 'Visita técnica a terreno a solicitudes forestales válido como tarea única no aplica como visita previa  a labores de mantenimiento, esta actividad  va orientado a resolver inquietudes de la autoridad ambiental o de terceros  sobre  árboles  que tengan o puedan tener incidencia con las redes de distribución, incluye: levantamiento en terreno, conceptos técnicos, toma de registros fotográficos, elaboración de fichas técnicas cuando se requiera,  información técnica del árbol, Estado Fitosanitario, datos dasométricos, nivel de interferencia con la red, Georeferenciación, identificación e instalación de plaquetas si aplica planos físicos y magnéticos, presentación de informes  periódicos requeridos por la Distribuidora según norma técnica ambiental, digitación y actualización de la información en las bases de datos de la compañía para inventarios. Se hace claridad que sólo aplica esta voz para las actividades previamente avaladas por parte de La Distribuidora.'],
        ['OA0021', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de mediay/o baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0022', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. Esta actividad se realiza haciendo usos del equipo de trabajo en tensión (linea viva).  La presente voz contempla el tratamiento, retiro y adecuada disposición  de residuos generados durante la actividad de  poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0023', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'LV', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0024', 'LIMPEZA DE ENREDADERAS, CON RETIRO DE RESIDUOS', 'PROXI-LM', 'Consiste en la remoción total de enredaderas ubicadas en postes, estructuras y/o conductores. Todas las operaciones de remoción total de enredaderas deben ser autorizadas por parte de la distribuidora. La ejecución del servicio comprende las siguientes actividades:  • Tener la ubicación exacta del área donde se realizará el servicio. • Movilización del área de trabajo y contar con los elementos necesarios para realizar el servicio. • Coordinar con el centro de operaciones el inicio y el final de las actividades (si aplica). • La unidad de medida será por m² (largo x ancho de área intervenida). • No aplica para cercas vivas • Contempla la recolección y disposición de residuos vegetales. • Toma de registros fotográficos con fecha,  hora y georeferenciados antes y después de realizar la actividad.'],
        ['OA0025', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0026', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS  SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0027', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0028', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0029', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE  LINEA ENERGIZADA', 'LV', 'Tala de área arborizada , para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0030', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0031', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro. Esta actividad viene realizada con un equipo especializado de trabajo en tensión.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagada por cada árbol retirado.'],
        ['OA0032', 'RETIRO DE ARBOL POR VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro.   La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagado por cada árbol retirado.'],
        ['OA0033', 'MANEJO DE REBROTES O ROSERÍA', 'PROXI-LM', 'Esta actividad considera el retiro de malezas, árbustos y otro tipo de vegetación con diámetro inferiores a 10 cm (o según la normativa vigente).  Incluye limpieza de terreno y transporte de residuos a lugares autorizados.  Incluye entrega de certificado emitido por el lugar autorizado correspondiente. Incluye informe con registro fotográfico. '],
        ['OA0034', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA DE GRUPO TÉCNICO DE LLEE.', 'LV', 'Esta actividad esta orientada a la utilización de Línea Viva para el apoyo en la ejecución de trabajos de mantenimiento de las instalaciones de terceros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora como:  - En que se presente riesgo eléctrico para las personas y la infraestructura, que sean causadas por un tercero o por el entorno de trabajo - Para el acompañamiento de auditorias o visitas de entes institucionales o corporativos. - Se pagará cuando se ha superado los primeros 10 minutos de espera, por cada bloque de 20 minutos.'],
        ['OA0035', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA', 'PROXI-LM', 'Esta actividad se realiza por solicitud específica de la distribuidora, por ejemplo cuando el Centro de control solicita a la cuadrilla quedarse en el punto de servicio a la espera de una nueva instrucción, o por temas de resguardo por seguridad, entre otros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora. Se pagará cuando se ha superado los primeros 30 minutos de espera, por cada bloque completo de 15 minutos (seran considerados a partir del minuto 31, no se pagaran las fracciones inferiores de 15 minutos). Se deberán presentar los soportes y evidencias correspondientes para el pago de la actividad.ù'],
        ['OA0036', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0037', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN sin residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz se usa cuando NO es requerido el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0038', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Esta prestación se paga por árbol individual y NO incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0039', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro, de acuerdo a las prácticas definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. ( La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente, para cualquier altura o diámetro. La presente voz es pagada por cada metro cuadrado talado en área arborizada. La presente actividad NO comprende el tratamiento y retiro de residuos de la tala ejecutada. '],
        ['OA0040', 'GESTION INTEGRAL DE CIRCUITO/LINEA DE MEDIA TENSION O ALTA TENSION', 'PROXI-LM', 'Intervención de todas las podas y/o talas requeridas para un circuito de Media Tensión o Línea de Alta Tensión, con el fin de mantener la calidad del servicio solicitada por la distribuidora.  El contratista debe dar cumplimiento a todos los procedimientos técnicos, de seguridad, ambiental y demás que apliquen a las actividades a programar y ejecutar. '],
        ['OA0041', 'DESCONEXIÓN O CONEXIÓN DE PUENTES DE MEDIA TENSIÓN CON LÍNEAS VIVAS', 'LV', 'Esta actividad esta orientada a la apertura o cierre de puentes (las 3 Fases) en la red MT . El trabajo comprende las siguientes acciones: • Instalar las cubiertas aislantes rígidas y proceder a abrir o cerrar los puentes uniendo (o separando) las líneas de primera posición con las de segunda posición en el vano y asegurar. • Una vez culminado los trabajos , retirar  los equipos provisorios instalados (las protecciones provisionales aisladas , señalización en zona de trabajo). • Informar a centro de operaciones el termino del trabajo y el retiro zona. • la voz incluye la apertura o cierre de los puentes de las 3 fases  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora. '],
        ['OA0042', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0043', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0044', 'INSTALACIÓN DE CONECTORA AL/CU/AL-AL (TODAS LAS SECCIONES) CON LLEE', 'LV', 'Las acciones principales son: •Proteger la red y elementos., según procedimiento Preparación de los conductores.   • Realizar la instalación de la conectora, según la norma de la distribuidora. • Realizar la conexión. • Instalar cubierta protectora de la conectora. •Retirar protecciones de la red y elementos. • Esta prestacion se reconoce solo cuando es la unica actividad que se realiza en la ubicación técnica. No aplica si hace parte de otra actividad principal'],
        ['OA0045', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento de residuos de la poda y/o desramificación ejecutada  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0046', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0047', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro; Este aplicara para casos en los que por condiciones de seguridad y operatividad, es necesario el uso de carro canasta para la liberacion de conductores electricos. La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0048', 'EQUIPO EN DISPONIBILIDAD CON VEHICULO PESADO ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes.  • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc. '],
        ['OA0049', 'EQUIPO LIVIANO EN DISPONIBILIDAD ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes. El equipo corresponde a una cuadrilla de mantenimiento de 4 personas. • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc.  '],
        ['OA0050', 'INSTALACIÓN O MEJORA TIERRA DE PROTECCIÓN O SERVICIO', 'PROXI-LM', 'Las acciones principales son:  • Contar con la ubicación exacta de los puntos donde se va a instalar o mejorar la tierra, movilización a la zona de trabajo • Instalación de la tierra de protección o servicio • Proceder a efectuar las adecuaciones indicadas por el mandante y aquellas necesarias de acuerdo a lo observado en terreno y mediciones realizadas.  Entre ellas; aumentar la cantidad de varillas de cobre  que componen la tierra o rellenar el terreno en que se encuentra la tierra con algún elemento químico (érico gel). Incluye mejoramiento de tierras en configuración Carson • Realizar medición del valor óhmico de la tierra de protección para asegurarse que esta sea inferior a lo indicado en la norma de la Distribuidora. • Si el trabajo amerita ejecutar una reparación integral de la tierra de protección esta deberá ser practicada e informada inmediatamente al mandante en su totalidad.  '],
        ['OA0051', 'OPERACIÓN EN EQUIPOS DE DISTRIBUCIÓN AÉREA MT', 'PROXI-LM', 'Las acciones principales son: • Esta actividad esta orientada a Abrir o Cerrar un equipo de distribución MT aéreo, según requerimiento radial del despachador del COS, ya sea por falla o por descargos programados Contar con la ubicación exacta del punto donde se va a efectuar la operación MT. Movilización al lugar de trabajo. Delimitar zona de trabajo, de acuerdo a manual de señalización vial. Establecer comunicación radial o por celular con el despachador del COS, para aportar los antecedentes que se requieran y tomar nota del tipo de maniobras a efectuar según la coordinación establecida en el Procedimiento respectivo y según lo indica el Reglamento de Operación. • Incluye bloqueo de equipos y verificación de servicio normal. • El baremo considera la operación de las tres fases (tanto en apertura como cierre) como un baremo. • Una vez culminado los trabajos, informar a centro de operaciones respectivo las condiciones en que ha quedado el elemento (provisorio o definitivo)  del trabajo y el retiro de la zona. • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0052', 'APERTURA Y CIERRE DE CELDAS EN MEDIA TENSIÓN', 'PROXI-LM', 'Las acciones principales son:Las acciones principales son: • Apertura o cierre del  equipo de maniobra ubicado  en la celda de MT de subestación convencional a nivel o subterránea, en coordinación con el centro de operación de la distribuidora. • Revelar tensión de retorno, aperturar  seccionadores e  instalar la  línea de tierra temporal o conectar la puesta a tierra propia  de la celda.  • Entrega de la boleta de liberación al responsable del trabajo de acuerdo al formato de la empresa distribuidora.  • En el caso de Normalizar el servicio ( cierre del equipo de maniobra)  solicitar la devolución  de la tarjeta de liberación firmada por   el responsable del trabajo. • Retirar todas las líneas de puesta a tierra instaladas • Proceder de acuerdo al Reglamento de Operación de la Distribuidora correspondiente.  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0053', 'PODA Y/O TRATAMIENTO INTEGRAL DE ÁRBOLES ', 'PROXI-LM', 'Esta actividad contempla el tratamiento integral de un (1) árbol (control de altura, poda de estructura, balanceo, aclareos, control de ramas colgantes y sobreextendidas) . Esta actividad será evaluada y avalada en conjunto con la Contratante para determinar el grado de dificultad por su tamaño y condición de especie arbórea. Considera las siguientes actividades. • Poda de un árbol (ramas, ganchos, etc.) hasta llegar a las distancias de seguridad y utilizando el sistema indicado por la distribuidora. Incluye toma de registros fotográficos antes, durante y después de realizar la poda. • Control de la caída (tecles de piola, cordel, etc.). Incluye señalización del lugar de caída. • Incluye la gestión de permisos con los propietarios de los predios • Georreferenciación, toma de datos dasométricos y elaboración de ficha técnica a cada árbol. • Tratamiento de cortes con cicatrizantes (aplicación de fungicida y/o pintura, etc.). • Recolección y disposición final de residuos vegetales (ramas, ganchos, etc.) y peligrosos a lugares autorizados. De ser necesario, incluye entrega de certificado emitido por el lugar autorizado correspondiente. • Instalación de placas de marcación en especies intervenidas. • En caso de ser necesario incluye la utilización de camion canasta • Presentación y digitación de informes mensuales requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios. • Visita de inspección previa a la actividad para el levantamiento de información de los trabajos solicitados por la distribuidora o autoridad ambiental.']
        
        // Agrega más actividades según sea necesario
    ]; 



    // Agregar las filas al cuerpo de la tabla
    var tbody = actividadesUrbanasTable.getElementsByTagName('tbody')[0];
    for (var i = 0; i < actividades.length; i++) {
        var row = tbody.insertRow(i);
        for (var j = 0; j < actividades[i].length - 1; j++) {
            var cell = row.insertCell(j);
            cell.textContent = actividades[i][j];
        }

        // Agregar botón en la última columna
        var botonCell = row.insertCell(actividades[i].length - 1);
        var boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.setAttribute("class", "btn btn-info");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.setAttribute("data-bs-target", "#modalDetalles_" + i);
        boton.textContent = "Ver Detalles";
        botonCell.appendChild(boton);

        // Agregar modal al final del documento
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("id", "modalDetalles_" + i);
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("aria-labelledby", "modalDetallesLabel_" + i);
        modal.setAttribute("aria-hidden", "true");

        var modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        // Contenido del modal
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var modalTitle = document.createElement("h5");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "modalDetallesLabel_" + i);
        modalTitle.textContent = "Detalles de la Actividad";
        modalHeader.appendChild(modalTitle);

        var modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        // Aquí se agrega el contenido específico de la actividad
        modalBody.textContent = actividades[i][actividades[i].length - 1];

        var modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");
        var closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn btn-secondary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.textContent = "Cerrar";
        modalFooter.appendChild(closeButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        document.body.appendChild(modal);
    }

    if ($.fn.DataTable.isDataTable('#actividadesUrbanas')) {
        $('#actividadesUrbanas').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesUrbanasConDificultad')) {
        $('#actividadesUrbanasConDificultad').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRurales')) {
        $('#actividadesRurales').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRuralesConDificultad')) {
        $('#actividadesRuralesConDificultad').DataTable().destroy();
    }
    
    
    

    $(document).ready(function() {
        $('#actividadesUrbanas').DataTable({
            "paging": true,      // Habilitar paginación
            "pageLength": 25,    // Número de filas por página
            "lengthMenu": [10, 25, 50],  // Opciones de cantidad de filas por página
            "ordering": true,    // Habilitar ordenamiento por columnas
            "searching": true,   // Habilitar búsqueda
            "info": true         // Mostrar información de la tabla (por ejemplo, "Mostrando 1 a 10 de 20 entradas")
        });
    });
    

    // Mostrar la tabla de actividades urbanas
    actividadesUrbanasTable.style.display = 'table';
}

// Función para cargar las actividades urbanas con Dificultad
function cargarActividadesUrbanasConDificultad() {
    var actividadesUrbanasConDificultadTable = document.getElementById('actividadesUrbanasConDificultad');
    // Limpiar las filas anteriores
    actividadesUrbanasConDificultadTable.getElementsByTagName('tbody')[0].innerHTML = '';
    var actividades = [
        ['OA0054', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0055', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro,  con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación en la copa del árbol aislado con la finalidad de ontrol de altura y/o cercania a las Redes Eléctricas.   El presente baremo comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0056', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0057', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0058', 'LEVANTAMIENTO DE DATOS DE VEGETACIÓN EN LA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Levantamiento, en sitio, de datos relativos a las áreas arborizadas que atraviesan las líneas aéreas de media tensión en conductores desnudos y cables aéreos, y datos relativos a árboles aislados con interferencia fuera de las áreas arborizadas; los datos a levantar son:  • Longitud de las áreas arborizadas en la línea principal o líneas de derivación. • Tipo de conductor (desnudo o cable aéreo) de la línea que pasa por el área arborizada. • Presencia de área arborizada bilateral o de un lado solamente. • Especie principal de las áreas arborizadas y de los árboles aislados. • Número de árboles aislados, que interfieren con la franja de ancho comisionado, existentes fuera de las áreas arborizadas.  Los datos se presentan por el contratista en el formato preparado por el Mandante; el contratista también deberá informar sobre la planimetría, proporcionada por el Mandante a una escala adecuada, evidencia de las áreas arborizadas levantadas en correlación con el consecutivo de las áreas arborizadas y no colocado en el formato antes mencionado. La longitud de las áreas no arborizadas es levantada sobre la planimetría a escala adecuada suministrada por el Mandante, después de haber levantado las áreas arborizadas.  esta voz se paga por cada km levantado de líneas aéreas de media tensión.'],
        ['OA0059', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0060', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro, con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado.   El presente baremo NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0061', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0062', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0063', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0064', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN con residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0065', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0066', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0067', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'PROXI-LM', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0068', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0069', 'TALA SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'La tala  comprende el corte total del tronco matriz de un árbol, que por inclinación o mal estado de conservación presenta peligro de daños en su proyección de caída a las redes eléctricas. Este tipo de tala considera un corte del tronco a 60 cm bajo la red BT o AP. Si existe solamente red MT se considera que el corte se deberá realizar a la distancia que garantice que las Redes no sufran daño al caer dicho árbol. Toda Tala debe ser autorizada por el Mandante. La tala está compuesta por las siguientes actividades: • Tramitar en la Municipalidad que corresponda los permisos necesarios para ejecutar el trabajo, el valor cancelado a la Municipalidad será de cargo del mandante. • Contar con la ubicación exacta del árbol en  la zona donde se ejecutará el Trabajo. • Movilización a la zona de trabajo y contar con los elementos necesarios para realizar la tala como por ejemplo: camión  elevador, motosierra,  • Coordinar con el Centro de Operación correspondiente el inicio y el fin de actividades. • Delimitar zona de trabajo, de acuerdo a manual de señalización vial. • Las cuadrillas de podas deben contar con movilización propia, además de algún medio de comunicación con su base y el Mandante. Cada árbol intervenido se considera un evento. Una vez finalizado el trabajo debe elaborar informe y registros ambientales, según el formato contenido en el procedimiento  de mantenimiento o definido por el Mandante, el cual deberá ser enviado en el plazo que indique este último.'],
        ['OA0070', 'SUMINISTRO DE ESPECIES ARBÓREAS POR COMPENSACIÓN', 'PROXI-LM', 'Esta actividad contempla el suministro de una (1) especie arbórea como medida de compensación. Considera las siguientes actividades: • Suministro y siembra de especie nativa (altura del árbol: 50 a 70 cm) según requerimiento de la distribuidora o autoridad ambiental. Incluye toma de registros fotográficos antes y después de realizar la siembra. • Elaboración previa del informe para la autoridad ambiental, plano de acuerdo al requerimiento, levantamiento topográfico, siembra en el sitio asignado por la distribuidora o autoridad ambiental.  • Instalación de plaqueta de identificación, riego, abono y adecuación del terreno inicial.  • Riego y cuidado cuatrimestral del árbol en plantación por un (1) año (3 intervenciones). Incluye replante (resiembra) por muerte de arboles hasta 10% de la siembra.  • Visitas de seguimiento con la autoridad ambiental.  • Elaboración de fichas y presentación y digitación de informes periódicos requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios.'],
        ['OA0071', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS ', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Se paga por árbol individual e incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0072', 'MANTENIMIENTO DE PLANTACIÓN FORESTAL POR ÁRBOL 0,3<=H<=2 M', 'PROXI-LM', 'Mantenimiento de plantación forestal  por árbol hasta 2 m incluye:  plateo 1 m de diámetro, riego y  abono  La resiembra por muerte de arboles se pagara por ítem baremado De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, tratamiento de cortes con cicatrizante, Georeferenciación del árbol, toma de datos dasométricos, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; suministro e instalación de placas de marcación en especies   intervenidas., presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados La Distribuidora o por la autoridad ambiental'],
        ['OA0073', 'VISITA TÉCNICA A TERRENO PARA LA ATENCIÓN DE SOLICITUDES FORESTALES ', 'PROXI-LM', 'Visita técnica a terreno a solicitudes forestales válido como tarea única no aplica como visita previa  a labores de mantenimiento, esta actividad  va orientado a resolver inquietudes de la autoridad ambiental o de terceros  sobre  árboles  que tengan o puedan tener incidencia con las redes de distribución, incluye: levantamiento en terreno, conceptos técnicos, toma de registros fotográficos, elaboración de fichas técnicas cuando se requiera,  información técnica del árbol, Estado Fitosanitario, datos dasométricos, nivel de interferencia con la red, Georeferenciación, identificación e instalación de plaquetas si aplica planos físicos y magnéticos, presentación de informes  periódicos requeridos por la Distribuidora según norma técnica ambiental, digitación y actualización de la información en las bases de datos de la compañía para inventarios. Se hace claridad que sólo aplica esta voz para las actividades previamente avaladas por parte de La Distribuidora.'],
        ['OA0074', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de mediay/o baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0075', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. Esta actividad se realiza haciendo usos del equipo de trabajo en tensión (linea viva).  La presente voz contempla el tratamiento, retiro y adecuada disposición  de residuos generados durante la actividad de  poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0076', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'LV', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0077', 'LIMPEZA DE ENREDADERAS, CON RETIRO DE RESIDUOS', 'PROXI-LM', 'Consiste en la remoción total de enredaderas ubicadas en postes, estructuras y/o conductores. Todas las operaciones de remoción total de enredaderas deben ser autorizadas por parte de la distribuidora. La ejecución del servicio comprende las siguientes actividades:  • Tener la ubicación exacta del área donde se realizará el servicio. • Movilización del área de trabajo y contar con los elementos necesarios para realizar el servicio. • Coordinar con el centro de operaciones el inicio y el final de las actividades (si aplica). • La unidad de medida será por m² (largo x ancho de área intervenida). • No aplica para cercas vivas • Contempla la recolección y disposición de residuos vegetales. • Toma de registros fotográficos con fecha,  hora y georeferenciados antes y después de realizar la actividad.'],
        ['OA0078', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0079', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS  SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0080', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0081', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0082', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE  LINEA ENERGIZADA', 'LV', 'Tala de área arborizada , para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0083', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0084', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro. Esta actividad viene realizada con un equipo especializado de trabajo en tensión.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagada por cada árbol retirado.'],
        ['OA0085', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro.   La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagado por cada árbol retirado.'],
        ['OA0086', 'MANEJO DE REBROTES O ROSERÍA', 'PROXI-LM', 'Esta actividad considera el retiro de malezas, árbustos y otro tipo de vegetación con diámetro inferiores a 10 cm (o según la normativa vigente).  Incluye limpieza de terreno y transporte de residuos a lugares autorizados.  Incluye entrega de certificado emitido por el lugar autorizado correspondiente. Incluye informe con registro fotográfico. '],
        ['OA0087', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA DE GRUPO TÉCNICO DE LLEE.', 'LV', 'Esta actividad esta orientada a la utilización de Línea Viva para el apoyo en la ejecución de trabajos de mantenimiento de las instalaciones de terceros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora como:  - En que se presente riesgo eléctrico para las personas y la infraestructura, que sean causadas por un tercero o por el entorno de trabajo - Para el acompañamiento de auditorias o visitas de entes institucionales o corporativos. - Se pagará cuando se ha superado los primeros 10 minutos de espera, por cada bloque de 20 minutos.'],
        ['OA0088', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA', 'PROXI-LM', 'Esta actividad se realiza por solicitud específica de la distribuidora, por ejemplo cuando el Centro de control solicita a la cuadrilla quedarse en el punto de servicio a la espera de una nueva instrucción, o por temas de resguardo por seguridad, entre otros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora. Se pagará cuando se ha superado los primeros 30 minutos de espera, por cada bloque completo de 15 minutos (seran considerados a partir del minuto 31, no se pagaran las fracciones inferiores de 15 minutos). Se deberán presentar los soportes y evidencias correspondientes para el pago de la actividad.ù'],
        ['OA0089', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0090', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN sin residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz se usa cuando NO es requerido el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0091', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Esta prestación se paga por árbol individual y NO incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0092', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro, de acuerdo a las prácticas definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. ( La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente, para cualquier altura o diámetro. La presente voz es pagada por cada metro cuadrado talado en área arborizada. La presente actividad NO comprende el tratamiento y retiro de residuos de la tala ejecutada. '],
        ['OA0093', 'GESTION INTEGRAL DE CIRCUITO/LINEA DE MEDIA TENSION O ALTA TENSION', 'PROXI-LM', 'Intervención de todas las podas y/o talas requeridas para un circuito de Media Tensión o Línea de Alta Tensión, con el fin de mantener la calidad del servicio solicitada por la distribuidora.  El contratista debe dar cumplimiento a todos los procedimientos técnicos, de seguridad, ambiental y demás que apliquen a las actividades a programar y ejecutar. '],
        ['OA0094', 'DESCONEXIÓN O CONEXIÓN DE PUENTES DE MEDIA TENSIÓN CON LÍNEAS VIVAS', 'LV', 'Esta actividad esta orientada a la apertura o cierre de puentes (las 3 Fases) en la red MT . El trabajo comprende las siguientes acciones: • Instalar las cubiertas aislantes rígidas y proceder a abrir o cerrar los puentes uniendo (o separando) las líneas de primera posición con las de segunda posición en el vano y asegurar. • Una vez culminado los trabajos , retirar  los equipos provisorios instalados (las protecciones provisionales aisladas , señalización en zona de trabajo). • Informar a centro de operaciones el termino del trabajo y el retiro zona. • la voz incluye la apertura o cierre de los puentes de las 3 fases  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora. '],
        ['OA0095', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0096', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0097', 'INSTALACIÓN DE CONECTORA AL/CU/AL-AL (TODAS LAS SECCIONES) CON LLEE', 'LV', 'Las acciones principales son: •Proteger la red y elementos., según procedimiento Preparación de los conductores.   • Realizar la instalación de la conectora, según la norma de la distribuidora. • Realizar la conexión. • Instalar cubierta protectora de la conectora. •Retirar protecciones de la red y elementos. • Esta prestacion se reconoce solo cuando es la unica actividad que se realiza en la ubicación técnica. No aplica si hace parte de otra actividad principal'],
        ['OA0098', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento de residuos de la poda y/o desramificación ejecutada  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0099', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0100', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro; Este aplicara para casos en los que por condiciones de seguridad y operatividad, es necesario el uso de carro canasta para la liberacion de conductores electricos. La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0101', 'EQUIPO EN DISPONIBILIDAD CON VEHICULO PESADO ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes.  • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc. '],
        ['OA0102', 'EQUIPO LIVIANO EN DISPONIBILIDAD ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes. El equipo corresponde a una cuadrilla de mantenimiento de 4 personas. • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc.  '],
        ['OA0103', 'INSTALACIÓN O MEJORA TIERRA DE PROTECCIÓN O SERVICIO', 'PROXI-LM', 'Las acciones principales son:  • Contar con la ubicación exacta de los puntos donde se va a instalar o mejorar la tierra, movilización a la zona de trabajo • Instalación de la tierra de protección o servicio • Proceder a efectuar las adecuaciones indicadas por el mandante y aquellas necesarias de acuerdo a lo observado en terreno y mediciones realizadas.  Entre ellas; aumentar la cantidad de varillas de cobre  que componen la tierra o rellenar el terreno en que se encuentra la tierra con algún elemento químico (érico gel). Incluye mejoramiento de tierras en configuración Carson • Realizar medición del valor óhmico de la tierra de protección para asegurarse que esta sea inferior a lo indicado en la norma de la Distribuidora. • Si el trabajo amerita ejecutar una reparación integral de la tierra de protección esta deberá ser practicada e informada inmediatamente al mandante en su totalidad.  '],
        ['OA0104', 'OPERACIÓN EN EQUIPOS DE DISTRIBUCIÓN AÉREA MT', 'PROXI-LM', 'Las acciones principales son: • Esta actividad esta orientada a Abrir o Cerrar un equipo de distribución MT aéreo, según requerimiento radial del despachador del COS, ya sea por falla o por descargos programados. Contar con la ubicación exacta del punto donde se va a efectuar la operación MT. Movilización al lugar de trabajo. Delimitar zona de trabajo, de acuerdo a manual de señalización vial. Establecer comunicación radial o por celular con el despachador del COS, para aportar los antecedentes que se requieran y tomar nota del tipo de maniobras a efectuar según la coordinación establecida en el Procedimiento respectivo y según lo indica el Reglamento de Operación. • Incluye bloqueo de equipos y verificación de servicio normal. • El baremo considera la operación de las tres fases (tanto en apertura como cierre) como un baremo. • Una vez culminado los trabajos, informar a centro de operaciones respectivo las condiciones en que ha quedado el elemento (provisorio o definitivo)  del trabajo y el retiro de la zona. • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0105', 'APERTURA Y CIERRE DE CELDAS EN MEDIA TENSIÓN', 'PROXI-LM', 'Las acciones principales son:Las acciones principales son: • Apertura o cierre del  equipo de maniobra ubicado  en la celda de MT de subestación convencional a nivel o subterránea, en coordinación con el centro de operación de la distribuidora. • Revelar tensión de retorno, aperturar  seccionadores e  instalar la  línea de tierra temporal o conectar la puesta a tierra propia  de la celda.  • Entrega de la boleta de liberación al responsable del trabajo de acuerdo al formato de la empresa distribuidora.  • En el caso de Normalizar el servicio ( cierre del equipo de maniobra)  solicitar la devolución  de la tarjeta de liberación firmada por   el responsable del trabajo. • Retirar todas las líneas de puesta a tierra instaladas • Proceder de acuerdo al Reglamento de Operación de la Distribuidora correspondiente.  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0106', 'PODA Y/O TRATAMIENTO INTEGRAL DE ÁRBOLES ', 'PROXI-LM', 'Esta actividad contempla el tratamiento integral de un (1) árbol (control de altura, poda de estructura, balanceo, aclareos, control de ramas colgantes y sobreextendidas) . Esta actividad será evaluada y avalada en conjunto con la Contratante para determinar el grado de dificultad por su tamaño y condición de especie arbórea. Considera las siguientes actividades. • Poda de un árbol (ramas, ganchos, etc.) hasta llegar a las distancias de seguridad y utilizando el sistema indicado por la distribuidora. Incluye toma de registros fotográficos antes, durante y después de realizar la poda. • Control de la caída (tecles de piola, cordel, etc.). Incluye señalización del lugar de caída. • Incluye la gestión de permisos con los propietarios de los predios • Georreferenciación, toma de datos dasométricos y elaboración de ficha técnica a cada árbol. • Tratamiento de cortes con cicatrizantes (aplicación de fungicida y/o pintura, etc.). • Recolección y disposición final de residuos vegetales (ramas, ganchos, etc.) y peligrosos a lugares autorizados. De ser necesario, incluye entrega de certificado emitido por el lugar autorizado correspondiente. • Instalación de placas de marcación en especies intervenidas. • En caso de ser necesario incluye la utilización de camion canasta • Presentación y digitación de informes mensuales requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios. • Visita de inspección previa a la actividad para el levantamiento de información de los trabajos solicitados por la distribuidora o autoridad ambiental.']
        

        // Agrega más actividades según sea necesario
    ];


    // Agregar las filas al cuerpo de la tabla
    var tbody = actividadesUrbanasConDificultadTable.getElementsByTagName('tbody')[0];
    for (var i = 0; i < actividades.length; i++) {
        var row = tbody.insertRow(i);
        for (var j = 0; j < actividades[i].length - 1; j++) {
            var cell = row.insertCell(j);
            cell.textContent = actividades[i][j];
        }

        // Agregar botón en la última columna
        var botonCell = row.insertCell(actividades[i].length - 1);
        var boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.setAttribute("class", "btn btn-info");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.setAttribute("data-bs-target", "#modalDetalles_" + i);
        boton.textContent = "Ver Detalles";
        botonCell.appendChild(boton);

        // Agregar modal al final del documento
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("id", "modalDetalles_" + i);
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("aria-labelledby", "modalDetallesLabel_" + i);
        modal.setAttribute("aria-hidden", "true");

        var modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        // Contenido del modal
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var modalTitle = document.createElement("h5");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "modalDetallesLabel_" + i);
        modalTitle.textContent = "Detalles de la Actividad";
        modalHeader.appendChild(modalTitle);

        var modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        // Aquí se agrega el contenido específico de la actividad
        modalBody.textContent = actividades[i][actividades[i].length - 1];

        var modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");
        var closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn btn-secondary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.textContent = "Cerrar";
        modalFooter.appendChild(closeButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        document.body.appendChild(modal);
    }

    if ($.fn.DataTable.isDataTable('#actividadesUrbanas')) {
        $('#actividadesUrbanas').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesUrbanasConDificultad')) {
        $('#actividadesUrbanasConDificultad').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRurales')) {
        $('#actividadesRurales').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRuralesConDificultad')) {
        $('#actividadesRuralesConDificultad').DataTable().destroy();
    }
    

    $(document).ready(function() {
        $('#actividadesUrbanasConDificultad').DataTable({
            "paging": true,      // Habilitar paginación
            "pageLength": 25,    // Número de filas por página
            "lengthMenu": [10, 25, 50],  // Opciones de cantidad de filas por página
            "ordering": true,    // Habilitar ordenamiento por columnas
            "searching": true,   // Habilitar búsqueda
            "info": true         // Mostrar información de la tabla (por ejemplo, "Mostrando 1 a 10 de 20 entradas")
        });
    });

    // Mostrar la tabla de actividades urbanas con dificultad
    
    actividadesUrbanasConDificultadTable.style.display = 'table';
}

// Función para cargar las actividades Rurales
function cargarActividadesRurales() {
    var actividadesRuralesTable = document.getElementById('actividadesRurales');
    // Limpiar las filas anteriores
    actividadesRuralesTable.getElementsByTagName('tbody')[0].innerHTML = '';
    var actividades = [
        
        ['OA0107', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0108', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro,  con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación en la copa del árbol aislado con la finalidad de ontrol de altura y/o cercania a las Redes Eléctricas.   El presente baremo comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0109', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0110', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0111', 'LEVANTAMIENTO DE DATOS DE VEGETACIÓN EN LA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Levantamiento, en sitio, de datos relativos a las áreas arborizadas que atraviesan las líneas aéreas de media tensión en conductores desnudos y cables aéreos, y datos relativos a árboles aislados con interferencia fuera de las áreas arborizadas; los datos a levantar son:  • Longitud de las áreas arborizadas en la línea principal o líneas de derivación. • Tipo de conductor (desnudo o cable aéreo) de la línea que pasa por el área arborizada. • Presencia de área arborizada bilateral o de un lado solamente. • Especie principal de las áreas arborizadas y de los árboles aislados. • Número de árboles aislados, que interfieren con la franja de ancho comisionado, existentes fuera de las áreas arborizadas.  Los datos se presentan por el contratista en el formato preparado por el Mandante; el contratista también deberá informar sobre la planimetría, proporcionada por el Mandante a una escala adecuada, evidencia de las áreas arborizadas levantadas en correlación con el consecutivo de las áreas arborizadas y no colocado en el formato antes mencionado. La longitud de las áreas no arborizadas es levantada sobre la planimetría a escala adecuada suministrada por el Mandante, después de haber levantado las áreas arborizadas.  esta voz se paga por cada km levantado de líneas aéreas de media tensión.'],
        ['OA0112', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0113', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro, con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado.   El presente baremo NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0114', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0115', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0116', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0117', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN con residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0118', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0119', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0120', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'PROXI-LM', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0121', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0122', 'TALA SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'La tala  comprende el corte total del tronco matriz de un árbol, que por inclinación o mal estado de conservación presenta peligro de daños en su proyección de caída a las redes eléctricas. Este tipo de tala considera un corte del tronco a 60 cm bajo la red BT o AP. Si existe solamente red MT se considera que el corte se deberá realizar a la distancia que garantice que las Redes no sufran daño al caer dicho árbol. Toda Tala debe ser autorizada por el Mandante. La tala está compuesta por las siguientes actividades: • Tramitar en la Municipalidad que corresponda los permisos necesarios para ejecutar el trabajo, el valor cancelado a la Municipalidad será de cargo del mandante. • Contar con la ubicación exacta del árbol en  la zona donde se ejecutará el Trabajo. • Movilización a la zona de trabajo y contar con los elementos necesarios para realizar la tala como por ejemplo: camión  elevador, motosierra,  • Coordinar con el Centro de Operación correspondiente el inicio y el fin de actividades. • Delimitar zona de trabajo, de acuerdo a manual de señalización vial. • Las cuadrillas de podas deben contar con movilización propia, además de algún medio de comunicación con su base y el Mandante. Cada árbol intervenido se considera un evento. Una vez finalizado el trabajo debe elaborar informe y registros ambientales, según el formato contenido en el procedimiento  de mantenimiento o definido por el Mandante, el cual deberá ser enviado en el plazo que indique este último.'],
        ['OA0123', 'SUMINISTRO DE ESPECIES ARBÓREAS POR COMPENSACIÓN', 'PROXI-LM', 'Esta actividad contempla el suministro de una (1) especie arbórea como medida de compensación. Considera las siguientes actividades: • Suministro y siembra de especie nativa (altura del árbol: 50 a 70 cm) según requerimiento de la distribuidora o autoridad ambiental. Incluye toma de registros fotográficos antes y después de realizar la siembra. • Elaboración previa del informe para la autoridad ambiental, plano de acuerdo al requerimiento, levantamiento topográfico, siembra en el sitio asignado por la distribuidora o autoridad ambiental.  • Instalación de plaqueta de identificación, riego, abono y adecuación del terreno inicial.  • Riego y cuidado cuatrimestral del árbol en plantación por un (1) año (3 intervenciones). Incluye replante (resiembra) por muerte de arboles hasta 10% de la siembra.  • Visitas de seguimiento con la autoridad ambiental.  • Elaboración de fichas y presentación y digitación de informes periódicos requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios.'],
        ['OA0124', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS ', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Se paga por árbol individual e incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0125', 'MANTENIMIENTO DE PLANTACIÓN FORESTAL POR ÁRBOL 0,3<=H<=2 M', 'PROXI-LM', 'Mantenimiento de plantación forestal  por árbol hasta 2 m incluye:  plateo 1 m de diámetro, riego y  abono  La resiembra por muerte de arboles se pagara por ítem baremado De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, tratamiento de cortes con cicatrizante, Georeferenciación del árbol, toma de datos dasométricos, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; suministro e instalación de placas de marcación en especies   intervenidas., presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados La Distribuidora o por la autoridad ambiental'],
        ['OA0126', 'VISITA TÉCNICA A TERRENO PARA LA ATENCIÓN DE SOLICITUDES FORESTALES ', 'PROXI-LM', 'Visita técnica a terreno a solicitudes forestales válido como tarea única no aplica como visita previa  a labores de mantenimiento, esta actividad  va orientado a resolver inquietudes de la autoridad ambiental o de terceros  sobre  árboles  que tengan o puedan tener incidencia con las redes de distribución, incluye: levantamiento en terreno, conceptos técnicos, toma de registros fotográficos, elaboración de fichas técnicas cuando se requiera,  información técnica del árbol, Estado Fitosanitario, datos dasométricos, nivel de interferencia con la red, Georeferenciación, identificación e instalación de plaquetas si aplica planos físicos y magnéticos, presentación de informes  periódicos requeridos por la Distribuidora según norma técnica ambiental, digitación y actualización de la información en las bases de datos de la compañía para inventarios. Se hace claridad que sólo aplica esta voz para las actividades previamente avaladas por parte de La Distribuidora.'],
        ['OA0127', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de mediay/o baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0128', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. Esta actividad se realiza haciendo usos del equipo de trabajo en tensión (linea viva).  La presente voz contempla el tratamiento, retiro y adecuada disposición  de residuos generados durante la actividad de  poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0129', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'LV', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0130', 'LIMPEZA DE ENREDADERAS, CON RETIRO DE RESIDUOS', 'PROXI-LM', 'Consiste en la remoción total de enredaderas ubicadas en postes, estructuras y/o conductores. Todas las operaciones de remoción total de enredaderas deben ser autorizadas por parte de la distribuidora. La ejecución del servicio comprende las siguientes actividades:  • Tener la ubicación exacta del área donde se realizará el servicio. • Movilización del área de trabajo y contar con los elementos necesarios para realizar el servicio. • Coordinar con el centro de operaciones el inicio y el final de las actividades (si aplica). • La unidad de medida será por m² (largo x ancho de área intervenida). • No aplica para cercas vivas • Contempla la recolección y disposición de residuos vegetales. • Toma de registros fotográficos con fecha,  hora y georeferenciados antes y después de realizar la actividad.'],
        ['OA0131', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0132', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS  SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0133', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0134', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0135', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE  LINEA ENERGIZADA', 'LV', 'Tala de área arborizada , para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0136', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0137', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro. Esta actividad viene realizada con un equipo especializado de trabajo en tensión.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagada por cada árbol retirado.'],
        ['OA0138', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro.   La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagado por cada árbol retirado.'],
        ['OA0139', 'MANEJO DE REBROTES O ROSERÍA', 'PROXI-LM', 'Esta actividad considera el retiro de malezas, árbustos y otro tipo de vegetación con diámetro inferiores a 10 cm (o según la normativa vigente).  Incluye limpieza de terreno y transporte de residuos a lugares autorizados.  Incluye entrega de certificado emitido por el lugar autorizado correspondiente. Incluye informe con registro fotográfico. '],
        ['OA0140', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA DE GRUPO TÉCNICO DE LLEE.', 'LV', 'Esta actividad esta orientada a la utilización de Línea Viva para el apoyo en la ejecución de trabajos de mantenimiento de las instalaciones de terceros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora como:  - En que se presente riesgo eléctrico para las personas y la infraestructura, que sean causadas por un tercero o por el entorno de trabajo - Para el acompañamiento de auditorias o visitas de entes institucionales o corporativos. - Se pagará cuando se ha superado los primeros 10 minutos de espera, por cada bloque de 20 minutos.'],
        ['OA0141', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA', 'PROXI-LM', 'Esta actividad se realiza por solicitud específica de la distribuidora, por ejemplo cuando el Centro de control solicita a la cuadrilla quedarse en el punto de servicio a la espera de una nueva instrucción, o por temas de resguardo por seguridad, entre otros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora. Se pagará cuando se ha superado los primeros 30 minutos de espera, por cada bloque completo de 15 minutos (seran considerados a partir del minuto 31, no se pagaran las fracciones inferiores de 15 minutos). Se deberán presentar los soportes y evidencias correspondientes para el pago de la actividad.ù'],
        ['OA0142', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0143', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN sin residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz se usa cuando NO es requerido el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0144', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Esta prestación se paga por árbol individual y NO incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0145', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro, de acuerdo a las prácticas definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. ( La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente, para cualquier altura o diámetro. La presente voz es pagada por cada metro cuadrado talado en área arborizada. La presente actividad NO comprende el tratamiento y retiro de residuos de la tala ejecutada. '],
        ['OA0146', 'GESTION INTEGRAL DE CIRCUITO/LINEA DE MEDIA TENSION O ALTA TENSION', 'PROXI-LM', 'Intervención de todas las podas y/o talas requeridas para un circuito de Media Tensión o Línea de Alta Tensión, con el fin de mantener la calidad del servicio solicitada por la distribuidora.  El contratista debe dar cumplimiento a todos los procedimientos técnicos, de seguridad, ambiental y demás que apliquen a las actividades a programar y ejecutar. '],
        ['OA0147', 'DESCONEXIÓN O CONEXIÓN DE PUENTES DE MEDIA TENSIÓN CON LÍNEAS VIVAS', 'LV', 'Esta actividad esta orientada a la apertura o cierre de puentes (las 3 Fases) en la red MT . El trabajo comprende las siguientes acciones: • Instalar las cubiertas aislantes rígidas y proceder a abrir o cerrar los puentes uniendo (o separando) las líneas de primera posición con las de segunda posición en el vano y asegurar. • Una vez culminado los trabajos , retirar  los equipos provisorios instalados (las protecciones provisionales aisladas , señalización en zona de trabajo). • Informar a centro de operaciones el termino del trabajo y el retiro zona. • la voz incluye la apertura o cierre de los puentes de las 3 fases  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora. '],
        ['OA0148', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0149', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0150', 'INSTALACIÓN DE CONECTORA AL/CU/AL-AL (TODAS LAS SECCIONES) CON LLEE', 'LV', 'Las acciones principales son: •Proteger la red y elementos., según procedimiento Preparación de los conductores.   • Realizar la instalación de la conectora, según la norma de la distribuidora. • Realizar la conexión. • Instalar cubierta protectora de la conectora. •Retirar protecciones de la red y elementos. • Esta prestacion se reconoce solo cuando es la unica actividad que se realiza en la ubicación técnica. No aplica si hace parte de otra actividad principal'],
        ['OA0151', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento de residuos de la poda y/o desramificación ejecutada  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0152', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0153', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro; Este aplicara para casos en los que por condiciones de seguridad y operatividad, es necesario el uso de carro canasta para la liberacion de conductores electricos. La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0154', 'EQUIPO EN DISPONIBILIDAD CON VEHICULO PESADO ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes.  • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc. '],
        ['OA0155', 'EQUIPO LIVIANO EN DISPONIBILIDAD ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes. El equipo corresponde a una cuadrilla de mantenimiento de 4 personas. • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc.  '],
        ['OA0156', 'INSTALACIÓN O MEJORA TIERRA DE PROTECCIÓN O SERVICIO', 'PROXI-LM', 'Las acciones principales son:  • Contar con la ubicación exacta de los puntos donde se va a instalar o mejorar la tierra, movilización a la zona de trabajo • Instalación de la tierra de protección o servicio • Proceder a efectuar las adecuaciones indicadas por el mandante y aquellas necesarias de acuerdo a lo observado en terreno y mediciones realizadas.  Entre ellas; aumentar la cantidad de varillas de cobre  que componen la tierra o rellenar el terreno en que se encuentra la tierra con algún elemento químico (érico gel). Incluye mejoramiento de tierras en configuración Carson • Realizar medición del valor óhmico de la tierra de protección para asegurarse que esta sea inferior a lo indicado en la norma de la Distribuidora. • Si el trabajo amerita ejecutar una reparación integral de la tierra de protección esta deberá ser practicada e informada inmediatamente al mandante en su totalidad.  '],
        ['OA0157', 'OPERACIÓN EN EQUIPOS DE DISTRIBUCIÓN AÉREA MT', 'PROXI-LM', 'Las acciones principales son: • Esta actividad esta orientada a Abrir o Cerrar un equipo de distribución MT aéreo, según requerimiento radial del despachador del COS, ya sea por falla o por descargos programados. Contar con la ubicación exacta del punto donde se va a efectuar la operación MT. Movilización al lugar de trabajo. Delimitar zona de trabajo, de acuerdo a manual de señalización vial. Establecer comunicación radial o por celular con el despachador del COS, para aportar los antecedentes que se requieran y tomar nota del tipo de maniobras a efectuar según la coordinación establecida en el Procedimiento respectivo y según lo indica el Reglamento de Operación. • Incluye bloqueo de equipos y verificación de servicio normal. • El baremo considera la operación de las tres fases (tanto en apertura como cierre) como un baremo. • Una vez culminado los trabajos, informar a centro de operaciones respectivo las condiciones en que ha quedado el elemento (provisorio o definitivo)  del trabajo y el retiro de la zona. • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0158', 'APERTURA Y CIERRE DE CELDAS EN MEDIA TENSIÓN', 'PROXI-LM', 'Las acciones principales son:Las acciones principales son: • Apertura o cierre del  equipo de maniobra ubicado  en la celda de MT de subestación convencional a nivel o subterránea, en coordinación con el centro de operación de la distribuidora. • Revelar tensión de retorno, aperturar  seccionadores e  instalar la  línea de tierra temporal o conectar la puesta a tierra propia  de la celda.  • Entrega de la boleta de liberación al responsable del trabajo de acuerdo al formato de la empresa distribuidora.  • En el caso de Normalizar el servicio ( cierre del equipo de maniobra)  solicitar la devolución  de la tarjeta de liberación firmada por   el responsable del trabajo. • Retirar todas las líneas de puesta a tierra instaladas • Proceder de acuerdo al Reglamento de Operación de la Distribuidora correspondiente.  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0159', 'PODA Y/O TRATAMIENTO INTEGRAL DE ÁRBOLES ', 'PROXI-LM', 'Esta actividad contempla el tratamiento integral de un (1) árbol (control de altura, poda de estructura, balanceo, aclareos, control de ramas colgantes y sobreextendidas) . Esta actividad será evaluada y avalada en conjunto con la Contratante para determinar el grado de dificultad por su tamaño y condición de especie arbórea. Considera las siguientes actividades. • Poda de un árbol (ramas, ganchos, etc.) hasta llegar a las distancias de seguridad y utilizando el sistema indicado por la distribuidora. Incluye toma de registros fotográficos antes, durante y después de realizar la poda. • Control de la caída (tecles de piola, cordel, etc.). Incluye señalización del lugar de caída. • Incluye la gestión de permisos con los propietarios de los predios • Georreferenciación, toma de datos dasométricos y elaboración de ficha técnica a cada árbol. • Tratamiento de cortes con cicatrizantes (aplicación de fungicida y/o pintura, etc.). • Recolección y disposición final de residuos vegetales (ramas, ganchos, etc.) y peligrosos a lugares autorizados. De ser necesario, incluye entrega de certificado emitido por el lugar autorizado correspondiente. • Instalación de placas de marcación en especies intervenidas. • En caso de ser necesario incluye la utilización de camion canasta • Presentación y digitación de informes mensuales requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios. • Visita de inspección previa a la actividad para el levantamiento de información de los trabajos solicitados por la distribuidora o autoridad ambiental.']

        

        // Agrega más actividades según sea necesario
    ];


    // Agregar las filas al cuerpo de la tabla
    var tbody = actividadesRuralesTable.getElementsByTagName('tbody')[0];
    for (var i = 0; i < actividades.length; i++) {
        var row = tbody.insertRow(i);
        for (var j = 0; j < actividades[i].length - 1; j++) {
            var cell = row.insertCell(j);
            cell.textContent = actividades[i][j];
        }

        // Agregar botón en la última columna
        var botonCell = row.insertCell(actividades[i].length - 1);
        var boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.setAttribute("class", "btn btn-info");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.setAttribute("data-bs-target", "#modalDetalles_" + i);
        boton.textContent = "Ver Detalles";
        botonCell.appendChild(boton);

        // Agregar modal al final del documento
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("id", "modalDetalles_" + i);
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("aria-labelledby", "modalDetallesLabel_" + i);
        modal.setAttribute("aria-hidden", "true");

        var modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        // Contenido del modal
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var modalTitle = document.createElement("h5");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "modalDetallesLabel_" + i);
        modalTitle.textContent = "Detalles de la Actividad";
        modalHeader.appendChild(modalTitle);

        var modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        // Aquí se agrega el contenido específico de la actividad
        modalBody.textContent = actividades[i][actividades[i].length - 1];

        var modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");
        var closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn btn-secondary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.textContent = "Cerrar";
        modalFooter.appendChild(closeButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        document.body.appendChild(modal);
    }

    if ($.fn.DataTable.isDataTable('#actividadesUrbanas')) {
        $('#actividadesUrbanas').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesUrbanasConDificultad')) {
        $('#actividadesUrbanasConDificultad').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRurales')) {
        $('#actividadesRurales').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRuralesConDificultad')) {
        $('#actividadesRuralesConDificultad').DataTable().destroy();
    }
    

    $(document).ready(function() {
        $('#actividadesRurales').DataTable({
            "paging": true,      // Habilitar paginación
            "pageLength": 25,    // Número de filas por página
            "lengthMenu": [10, 25, 50],  // Opciones de cantidad de filas por página
            "ordering": true,    // Habilitar ordenamiento por columnas
            "searching": true,   // Habilitar búsqueda
            "info": true         // Mostrar información de la tabla (por ejemplo, "Mostrando 1 a 10 de 20 entradas")
        });
    });

    // Mostrar la tabla de actividades urbanas con dificultad
    
    actividadesRuralesTable.style.display = 'table';
}

// Función para cargar las actividades Rurales con Dificultad
function cargarActividadesRuralesConDificultad() {
    var actividadesRuralesConDificultadTable = document.getElementById('actividadesRuralesConDificultad');
    // Limpiar las filas anteriores
    actividadesRuralesConDificultadTable.getElementsByTagName('tbody')[0].innerHTML = '';
    var actividades = [
        ['OA0160', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0161', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro,  con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación en la copa del árbol aislado con la finalidad de ontrol de altura y/o cercania a las Redes Eléctricas.   El presente baremo comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0162', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0163', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0164', 'LEVANTAMIENTO DE DATOS DE VEGETACIÓN EN LA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Levantamiento, en sitio, de datos relativos a las áreas arborizadas que atraviesan las líneas aéreas de media tensión en conductores desnudos y cables aéreos, y datos relativos a árboles aislados con interferencia fuera de las áreas arborizadas; los datos a levantar son:  • Longitud de las áreas arborizadas en la línea principal o líneas de derivación. • Tipo de conductor (desnudo o cable aéreo) de la línea que pasa por el área arborizada. • Presencia de área arborizada bilateral o de un lado solamente. • Especie principal de las áreas arborizadas y de los árboles aislados. • Número de árboles aislados, que interfieren con la franja de ancho comisionado, existentes fuera de las áreas arborizadas.  Los datos se presentan por el contratista en el formato preparado por el Mandante; el contratista también deberá informar sobre la planimetría, proporcionada por el Mandante a una escala adecuada, evidencia de las áreas arborizadas levantadas en correlación con el consecutivo de las áreas arborizadas y no colocado en el formato antes mencionado. La longitud de las áreas no arborizadas es levantada sobre la planimetría a escala adecuada suministrada por el Mandante, después de haber levantado las áreas arborizadas.  esta voz se paga por cada km levantado de líneas aéreas de media tensión.'],
        ['OA0165', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0166', 'PODA TECNICA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación tecnica de árbol aislado en línea de media tensión, para cualquier altura o diámetro, con la finalidad de obtener el control de altura y/o cercanía a las Redes Eléctricas.  La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado.   El presente baremo NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada.  El presente baremo es pagado por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0167', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0168', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0169', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0170', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN con residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0171', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de área arborizada en línea de baja  tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0172', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Poda y/o desramificación de árbol aislado en línea de baja tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. La presente voz NO comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0173', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'PROXI-LM', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0174', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0175', 'TALA SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'La tala  comprende el corte total del tronco matriz de un árbol, que por inclinación o mal estado de conservación presenta peligro de daños en su proyección de caída a las redes eléctricas. Este tipo de tala considera un corte del tronco a 60 cm bajo la red BT o AP. Si existe solamente red MT se considera que el corte se deberá realizar a la distancia que garantice que las Redes no sufran daño al caer dicho árbol. Toda Tala debe ser autorizada por el Mandante. La tala está compuesta por las siguientes actividades: • Tramitar en la Municipalidad que corresponda los permisos necesarios para ejecutar el trabajo, el valor cancelado a la Municipalidad será de cargo del mandante. • Contar con la ubicación exacta del árbol en  la zona donde se ejecutará el Trabajo. • Movilización a la zona de trabajo y contar con los elementos necesarios para realizar la tala como por ejemplo: camión  elevador, motosierra,  • Coordinar con el Centro de Operación correspondiente el inicio y el fin de actividades. • Delimitar zona de trabajo, de acuerdo a manual de señalización vial. • Las cuadrillas de podas deben contar con movilización propia, además de algún medio de comunicación con su base y el Mandante. Cada árbol intervenido se considera un evento. Una vez finalizado el trabajo debe elaborar informe y registros ambientales, según el formato contenido en el procedimiento  de mantenimiento o definido por el Mandante, el cual deberá ser enviado en el plazo que indique este último.'],
        ['OA0176', 'SUMINISTRO DE ESPECIES ARBÓREAS POR COMPENSACIÓN', 'PROXI-LM', 'Esta actividad contempla el suministro de una (1) especie arbórea como medida de compensación. Considera las siguientes actividades: • Suministro y siembra de especie nativa (altura del árbol: 50 a 70 cm) según requerimiento de la distribuidora o autoridad ambiental. Incluye toma de registros fotográficos antes y después de realizar la siembra. • Elaboración previa del informe para la autoridad ambiental, plano de acuerdo al requerimiento, levantamiento topográfico, siembra en el sitio asignado por la distribuidora o autoridad ambiental.  • Instalación de plaqueta de identificación, riego, abono y adecuación del terreno inicial.  • Riego y cuidado cuatrimestral del árbol en plantación por un (1) año (3 intervenciones). Incluye replante (resiembra) por muerte de arboles hasta 10% de la siembra.  • Visitas de seguimiento con la autoridad ambiental.  • Elaboración de fichas y presentación y digitación de informes periódicos requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios.'],
        ['OA0177', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS ', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Se paga por árbol individual e incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0178', 'MANTENIMIENTO DE PLANTACIÓN FORESTAL POR ÁRBOL 0,3<=H<=2 M', 'PROXI-LM', 'Mantenimiento de plantación forestal  por árbol hasta 2 m incluye:  plateo 1 m de diámetro, riego y  abono  La resiembra por muerte de arboles se pagara por ítem baremado De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, tratamiento de cortes con cicatrizante, Georeferenciación del árbol, toma de datos dasométricos, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; suministro e instalación de placas de marcación en especies   intervenidas., presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados La Distribuidora o por la autoridad ambiental'],
        ['OA0179', 'VISITA TÉCNICA A TERRENO PARA LA ATENCIÓN DE SOLICITUDES FORESTALES ', 'PROXI-LM', 'Visita técnica a terreno a solicitudes forestales válido como tarea única no aplica como visita previa  a labores de mantenimiento, esta actividad  va orientado a resolver inquietudes de la autoridad ambiental o de terceros  sobre  árboles  que tengan o puedan tener incidencia con las redes de distribución, incluye: levantamiento en terreno, conceptos técnicos, toma de registros fotográficos, elaboración de fichas técnicas cuando se requiera,  información técnica del árbol, Estado Fitosanitario, datos dasométricos, nivel de interferencia con la red, Georeferenciación, identificación e instalación de plaquetas si aplica planos físicos y magnéticos, presentación de informes  periódicos requeridos por la Distribuidora según norma técnica ambiental, digitación y actualización de la información en las bases de datos de la compañía para inventarios. Se hace claridad que sólo aplica esta voz para las actividades previamente avaladas por parte de La Distribuidora.'],
        ['OA0180', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de mediay/o baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0181', 'PODA Y/O DESRAMIFICACIÓN DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada. Esta actividad se realiza haciendo usos del equipo de trabajo en tensión (linea viva).  La presente voz contempla el tratamiento, retiro y adecuada disposición  de residuos generados durante la actividad de  poda y/o desramificación ejecutada. La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0182', 'PAGO ADICIONAL POR TRABAJOS RELIZADOS EN HORARIO NOCTURNO O EN DIAS FESTIVOS', 'LV', 'Esta actividad reconoce el sobrecoste asociado a la realización de trabajos en horario nocturno o en días festivos.  • Se aplica sólo cuando el servicio es solicitado por la Distribuidora.  No aplica por tanto, para los trabajos en que el contratista tiene posibilidad de su propia programación. • El número de puntos que se debe pagar por esta actividad, se calcula multiplicando la cantidad de puntos de esta actividad, por la suma total de puntos asociados a la actividad o trabajo que fue realizado en horario nocturno o en días festivos.  • En las Especificacion Tecnica de la Licitacion puede ser indicado un tiempo limite de antelacion por el aviso segun el cual no se aplica esta voz'],
        ['OA0183', 'LIMPEZA DE ENREDADERAS, CON RETIRO DE RESIDUOS', 'PROXI-LM', 'Consiste en la remoción total de enredaderas ubicadas en postes, estructuras y/o conductores. Todas las operaciones de remoción total de enredaderas deben ser autorizadas por parte de la distribuidora. La ejecución del servicio comprende las siguientes actividades:  • Tener la ubicación exacta del área donde se realizará el servicio. • Movilización del área de trabajo y contar con los elementos necesarios para realizar el servicio. • Coordinar con el centro de operaciones el inicio y el final de las actividades (si aplica). • La unidad de medida será por m² (largo x ancho de área intervenida). • No aplica para cercas vivas • Contempla la recolección y disposición de residuos vegetales. • Toma de registros fotográficos con fecha,  hora y georeferenciados antes y después de realizar la actividad.'],
        ['OA0184', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0185', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS  SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Por desgajes Progresivos De acuerdo a las mejores prácticas Silviculturales definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental ,incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por La Distribuidora, digitación y actualización de la información en las bases de datos de La Distribuidora o autoridad ambiental; para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que a partir de la visita  conjunta en terreno, se defina que el grado de complejidad de los trabajos excede las caracteristicas normales de una tala especializada común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logistico necesario para su ejecución, asi como tiempo requerido para la ejecución del mismo.'],
        ['OA0186', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0187', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de árbol aislado en línea de media tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz es pagada por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0188', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE  LINEA ENERGIZADA', 'LV', 'Tala de área arborizada , para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz comprende el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0189', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS CON EQUIPOS DE LINEA ENERGIZADA', 'LV', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0190', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro. Esta actividad viene realizada con un equipo especializado de trabajo en tensión.  La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagada por cada árbol retirado.'],
        ['OA0191', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro.   La actividad comprende la supresión total (a ras de suelo) del árbol volcado.  El presente baremo NO comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento.  La presente actividad es pagado por cada árbol retirado.'],
        ['OA0192', 'MANEJO DE REBROTES O ROSERÍA', 'PROXI-LM', 'Esta actividad considera el retiro de malezas, árbustos y otro tipo de vegetación con diámetro inferiores a 10 cm (o según la normativa vigente).  Incluye limpieza de terreno y transporte de residuos a lugares autorizados.  Incluye entrega de certificado emitido por el lugar autorizado correspondiente. Incluye informe con registro fotográfico. '],
        ['OA0193', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA DE GRUPO TÉCNICO DE LLEE.', 'LV', 'Esta actividad esta orientada a la utilización de Línea Viva para el apoyo en la ejecución de trabajos de mantenimiento de las instalaciones de terceros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora como:  - En que se presente riesgo eléctrico para las personas y la infraestructura, que sean causadas por un tercero o por el entorno de trabajo - Para el acompañamiento de auditorias o visitas de entes institucionales o corporativos. - Se pagará cuando se ha superado los primeros 10 minutos de espera, por cada bloque de 20 minutos.'],
        ['OA0194', 'TIEMPO DE ESPERA POR SOLICITUD DE LA DISTRIBUIDORA', 'PROXI-LM', 'Esta actividad se realiza por solicitud específica de la distribuidora, por ejemplo cuando el Centro de control solicita a la cuadrilla quedarse en el punto de servicio a la espera de una nueva instrucción, o por temas de resguardo por seguridad, entre otros.  Se aplicaría para trabajos expresamente solicitados y avalados por la Distribuidora. Se pagará cuando se ha superado los primeros 30 minutos de espera, por cada bloque completo de 15 minutos (seran considerados a partir del minuto 31, no se pagaran las fracciones inferiores de 15 minutos). Se deberán presentar los soportes y evidencias correspondientes para el pago de la actividad.ù'],
        ['OA0195', 'TALA DE ÁREA ARBORIZADA PARA CONSTRUCCIÓN DE NUEVA LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada para construcción de nueva línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente. La presente voz es pagada por cada metro cuadrado talado en área arborizada.'],
        ['OA0196', 'TALA DE ÁRBOL AISLADO EN LÍNEA DE BAJA TENSIÓN sin residuos', 'PROXI-LM', 'Tala de árbol aislado en línea de baja tensión, para cualquier altura o diámetro.  La actividad comprende la supresión total (a ras de suelo) del árbol aislado. La presente voz se usa cuando NO es requerido el tratamiento y retiro de residuos de la tala ejecutada. La presente voz es pagad por cada árbol aislado talado y no es aplicable en área arborizada. '],
        ['OA0197', 'TALA ESPECIALIZADA DE ÁRBOLES H> 15 M CON CORTES PROGRESIVOS SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Retiro de árbol por cortes progresivos de acuerdo a las mejores prácticas Arboriculturales definidas en las Normas Técnicas y demás documentos aplicables del Sistema Gestión de la Distribuidora y/o solicitadas por la autoridad ambiental. incluye visita pre operacional, levantamiento de información para gestionar los descargos, ejecución del descargo con centro de control; programación de recursos para la ejecución técnica y segura de la actividad, recolección y disposición final de residuos vegetales y peligrosos, Tratamiento del corte para evitar rebrotes, Georeferenciación del árbol, elaboración de fichas técnicas  por individuo a intervenir; toma de registros fotográficos antes y después de realizar la actividad; presentación de informes mensuales requeridos por la distribuidora, digitación y actualización de la información en las bases de datos de la distribuidora o autoridad ambiental para inventarios. También incluye, donde aplique, trámite de permisos y documentación ante la autoridad ambiental competente; visitas de inspección a los trabajos solicitados por La Distribuidora o por la autoridad ambiental.  Este aplicara para aquellas situaciones en las que se defina que el grado de complejidad de los trabajos excede las características normales de una tala normal o común, teniendo en cuenta los niveles de riesgo detectados, recurso humano y logístico necesario para su ejecución, así como tiempo requerido para la ejecución del mismo. Las talas especializadas deben contar con la implementación de los sistemas de cordaje especializados, como los son cuerdas y dispositivos de poleas, cuerdas tubulares, manilas, anillos, platos, bloques, etc., para todas las partes a remover. Todas las actividades de tala especializada deben ser previamente aprobadas y contar con los respectivos soportes de implementación de las técnicas y establecidos en los procedimientos y documentos técnicos de la contratante. La altura mínima para considerar la actividad es de 15 metros, sin embargo, no todo árbol superior a esta altura se pagará como tala especializada, por lo cual los aspectos de complejidad y variables de sistemas de cordaje se verificarán por parte de la distribuidora. Arboles superiores a 15 metros que no cumplan las condiciones para ser especializadas y/o que no sean aprobadas como tal, serán pagadas como talas normales según corresponda. Las talas especializadas están sujetas a aprobación por parte de la distribuidora y la no aprobación no es conciliables con el contratista para su ejecución. No aplica para trabajos no programados y/o emergencias. Esta prestación se paga por árbol individual y NO incluye la recolección y disposición de residuos Incluye garantía de intervención de 8 meses, en los cuales, si se genera una falla o afectación al servicio por el árbol y/o vegetación intervenida, la corrección debe ser asumida por el contratista (aplican los respectivos apremios). Incluye visita preoperativa, levantamiento de información para gestionar los descargos y normalización de desviaciones informáticas en los sistemas de la distribuidora.'],
        ['OA0198', 'TALA DE ÁREA ARBORIZADA EN LÍNEA DE MEDIA TENSIÓN SIN RETIRO DE RESIDUOS', 'PROXI-LM', 'Tala de área arborizada en línea de media tensión, para cualquier altura o diámetro, de acuerdo a las prácticas definidas en las Normas Técnicas Ambientales y demás documentos aplicables del Sistema Gestión Ambiental de La Distribuidora y/o  solicitadas por la autoridad ambiental Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. ( La actividad comprende la supresión total (a ras de suelo) del área arborizada y de cualquier tipo de vegetación presente, para cualquier altura o diámetro. La presente voz es pagada por cada metro cuadrado talado en área arborizada. La presente actividad NO comprende el tratamiento y retiro de residuos de la tala ejecutada. '],
        ['OA0199', 'GESTION INTEGRAL DE CIRCUITO/LINEA DE MEDIA TENSION O ALTA TENSION', 'PROXI-LM', 'Intervención de todas las podas y/o talas requeridas para un circuito de Media Tensión o Línea de Alta Tensión, con el fin de mantener la calidad del servicio solicitada por la distribuidora.  El contratista debe dar cumplimiento a todos los procedimientos técnicos, de seguridad, ambiental y demás que apliquen a las actividades a programar y ejecutar. '],
        ['OA0200', 'DESCONEXIÓN O CONEXIÓN DE PUENTES DE MEDIA TENSIÓN CON LÍNEAS VIVAS', 'LV', 'Esta actividad esta orientada a la apertura o cierre de puentes (las 3 Fases) en la red MT . El trabajo comprende las siguientes acciones: • Instalar las cubiertas aislantes rígidas y proceder a abrir o cerrar los puentes uniendo (o separando) las líneas de primera posición con las de segunda posición en el vano y asegurar. • Una vez culminado los trabajos , retirar  los equipos provisorios instalados (las protecciones provisionales aisladas , señalización en zona de trabajo). • Informar a centro de operaciones el termino del trabajo y el retiro zona. • la voz incluye la apertura o cierre de los puentes de las 3 fases  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora. '],
        ['OA0201', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz comprende el tratamiento y retiro de residuos de la poda y/o desramificación ejecutada. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0202', 'PODA Y/O DESRAMIFICACIÓN DE ÁRBOL AISLADO EN LÍNEA DE MEDIA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Poda y/o desramificación de árbol aislado en línea de media tensión, para cualquier altura o diámetro. La actividad comprende la poda y/o desramificación realizada en la copa del árbol aislado. Esta actividad viene realizada con un equipo especializado de trabajo en tensión. La presente voz es pagada por cada árbol aislado podado y/o desramificado y no es aplicable en área arborizada.'],
        ['OA0203', 'INSTALACIÓN DE CONECTORA AL/CU/AL-AL (TODAS LAS SECCIONES) CON LLEE', 'LV', 'Las acciones principales son: •Proteger la red y elementos., según procedimiento Preparación de los conductores.   • Realizar la instalación de la conectora, según la norma de la distribuidora. • Realizar la conexión. • Instalar cubierta protectora de la conectora. •Retirar protecciones de la red y elementos. • Esta prestacion se reconoce solo cuando es la unica actividad que se realiza en la ubicación técnica. No aplica si hace parte de otra actividad principal'],
        ['OA0204', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz comprende el tratamiento de residuos de la poda y/o desramificación ejecutada  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0205', 'PODA Y/O DESRAMIFICACIÓN MASIVA DE ÁRBOLES  CON EQUIPOS DE LÍNEA ENERGIZADA SIN RETIRO DE RESIDUOS', 'LV', 'Realizada con equipo de trabajo en tensión. Poda y/o desramificación de área arborizada en línea de media tensión, para cualquier altura o diámetro. Es considerada "área arborizada" el grupo de árboles y/o arbustos concentrados en un trazado superior a 5 (cinco) metros de extensión medidos a lo largo de la línea eléctrica. La actividad comprende la poda y/o desramificación realizada en la copa de los árboles de un área arborizada.  La presente voz es pagada por cada metro cuadrado podado y/o desramificado en área arborizada.'],
        ['OA0206', 'RETIRO DE ARBOL POR  VOLCAMIENTO SOBRE LAS REDES DE MEDIA Y/O BAJA TENSIÓN CON EQUIPOS DE LÍNEA ENERGIZADA', 'LV', 'Actividades de repique necesarias para efectuar el retiro del volcamiento sobre línea de media y/o baja tensión, para cualquier altura o diámetro; Este aplicara para casos en los que por condiciones de seguridad y operatividad, es necesario el uso de carro canasta para la liberacion de conductores electricos. La actividad comprende la supresión total (a ras de suelo) del árbol volcado. La presente voz comprende el tratamiento, retiro y adecuada disposicion de residuos generados durante la actividad de repique ejecutados necesarios para retirar el volcamiento. La presente voz es pagada por cada árbol retirado. '],
        ['OA0207', 'EQUIPO EN DISPONIBILIDAD CON VEHICULO PESADO ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes.  • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc. '],
        ['OA0208', 'EQUIPO LIVIANO EN DISPONIBILIDAD ', 'PROXI-LM', 'Las acciones principales son: • Servicio presencial de un equipo de trabajo movilizado y preparado con el equipamiento necesario para atender eventuales contingencias en las redes. El equipo corresponde a una cuadrilla de mantenimiento de 4 personas. • La utilización de este baremos quedará a criterio de la Distribuidora sólo para casos especiales o excepcionales. • Considera la disponibilidad para días especiales, como por ejemplo: Fiestas Patrias, Navidad, Año Nuevo, elecciones, eventos climáticos excepcionales, requerimiento de organismos de gobierno, etc.  '],
        ['OA0209', 'INSTALACIÓN O MEJORA TIERRA DE PROTECCIÓN O SERVICIO', 'PROXI-LM', 'Las acciones principales son:  • Contar con la ubicación exacta de los puntos donde se va a instalar o mejorar la tierra, movilización a la zona de trabajo • Instalación de la tierra de protección o servicio • Proceder a efectuar las adecuaciones indicadas por el mandante y aquellas necesarias de acuerdo a lo observado en terreno y mediciones realizadas.  Entre ellas; aumentar la cantidad de varillas de cobre  que componen la tierra o rellenar el terreno en que se encuentra la tierra con algún elemento químico (érico gel). Incluye mejoramiento de tierras en configuración Carson • Realizar medición del valor óhmico de la tierra de protección para asegurarse que esta sea inferior a lo indicado en la norma de la Distribuidora. • Si el trabajo amerita ejecutar una reparación integral de la tierra de protección esta deberá ser practicada e informada inmediatamente al mandante en su totalidad.  '],
        ['OA0210', 'OPERACIÓN EN EQUIPOS DE DISTRIBUCIÓN AÉREA MT', 'PROXI-LM', 'Las acciones principales son: • Esta actividad esta orientada a Abrir o Cerrar un equipo de distribución MT aéreo, según requerimiento radial del despachador del COS, ya sea por falla o por descargos programados. • Contar con la ubicación exacta del punto donde se va a efectuar la operación MT. Movilización al lugar de trabajo. Delimitar zona de trabajo, de acuerdo a manual de señalización vial. • Establecer comunicación radial o por celular con el despachador del COS, para aportar los antecedentes que se requieran y tomar nota del tipo de maniobras a efectuar según la coordinación establecida en el Procedimiento respectivo y según lo indica el Reglamento de Operación. • Incluye bloqueo de equipos y verificación de servicio normal. • El baremo considera la operación de las tres fases (tanto en apertura como cierre) como un baremo. • Una vez culminado los trabajos, informar a centro de operaciones respectivo las condiciones en que ha quedado el elemento (provisorio o definitivo)  del trabajo y el retiro de la zona. • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0211', 'APERTURA Y CIERRE DE CELDAS EN MEDIA TENSIÓN', 'PROXI-LM', 'Las acciones principales son:Las acciones principales son: • Apertura o cierre del  equipo de maniobra ubicado  en la celda de MT de subestación convencional a nivel o subterránea, en coordinación con el centro de operación de la distribuidora. • Revelar tensión de retorno, aperturar  seccionadores e  instalar la  línea de tierra temporal o conectar la puesta a tierra propia  de la celda.  • Entrega de la boleta de liberación al responsable del trabajo de acuerdo al formato de la empresa distribuidora.  • En el caso de Normalizar el servicio ( cierre del equipo de maniobra)  solicitar la devolución  de la tarjeta de liberación firmada por   el responsable del trabajo. • Retirar todas las líneas de puesta a tierra instaladas • Proceder de acuerdo al Reglamento de Operación de la Distribuidora correspondiente.  • Elaborar reportes de acuerdo a lo solicitado por Distribuidora.'],
        ['OA0212', 'PODA Y/O TRATAMIENTO INTEGRAL DE ÁRBOLES ', 'PROXI-LM', 'Esta actividad contempla el tratamiento integral de un (1) árbol (control de altura, poda de estructura, balanceo, aclareos, control de ramas colgantes y sobreextendidas) . Esta actividad será evaluada y avalada en conjunto con la Contratante para determinar el grado de dificultad por su tamaño y condición de especie arbórea. Considera las siguientes actividades. • Poda de un árbol (ramas, ganchos, etc.) hasta llegar a las distancias de seguridad y utilizando el sistema indicado por la distribuidora. Incluye toma de registros fotográficos antes, durante y después de realizar la poda. • Control de la caída (tecles de piola, cordel, etc.). Incluye señalización del lugar de caída. • Incluye la gestión de permisos con los propietarios de los predios • Georreferenciación, toma de datos dasométricos y elaboración de ficha técnica a cada árbol. • Tratamiento de cortes con cicatrizantes (aplicación de fungicida y/o pintura, etc.). • Recolección y disposición final de residuos vegetales (ramas, ganchos, etc.) y peligrosos a lugares autorizados. De ser necesario, incluye entrega de certificado emitido por el lugar autorizado correspondiente. • Instalación de placas de marcación en especies intervenidas. • En caso de ser necesario incluye la utilización de camion canasta • Presentación y digitación de informes mensuales requeridos por la distribuidora, además de actualización de la información en la base de datos de la distribuidora o autoridad ambiental para inventarios. • Visita de inspección previa a la actividad para el levantamiento de información de los trabajos solicitados por la distribuidora o autoridad ambiental.']

        // Agrega más actividades según sea necesario
    ];


    // Agregar las filas al cuerpo de la tabla
    var tbody = actividadesRuralesConDificultadTable.getElementsByTagName('tbody')[0];
    for (var i = 0; i < actividades.length; i++) {
        var row = tbody.insertRow(i);
        for (var j = 0; j < actividades[i].length - 1; j++) {
            var cell = row.insertCell(j);
            cell.textContent = actividades[i][j];
        }

        // Agregar botón en la última columna
        var botonCell = row.insertCell(actividades[i].length - 1);
        var boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.setAttribute("class", "btn btn-info");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.setAttribute("data-bs-target", "#modalDetalles_" + i);
        boton.textContent = "Ver Detalles";
        botonCell.appendChild(boton);

        // Agregar modal al final del documento
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("id", "modalDetalles_" + i);
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("aria-labelledby", "modalDetallesLabel_" + i);
        modal.setAttribute("aria-hidden", "true");

        var modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog");

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");

        // Contenido del modal
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var modalTitle = document.createElement("h5");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "modalDetallesLabel_" + i);
        modalTitle.textContent = "Detalles de la Actividad";
        modalHeader.appendChild(modalTitle);

        var modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        // Aquí se agrega el contenido específico de la actividad
        modalBody.textContent = actividades[i][actividades[i].length - 1];

        var modalFooter = document.createElement("div");
        modalFooter.setAttribute("class", "modal-footer");
        var closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("class", "btn btn-secondary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.textContent = "Cerrar";
        modalFooter.appendChild(closeButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        document.body.appendChild(modal);
    }

    if ($.fn.DataTable.isDataTable('#actividadesUrbanas')) {
        $('#actividadesUrbanas').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesUrbanasConDificultad')) {
        $('#actividadesUrbanasConDificultad').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRurales')) {
        $('#actividadesRurales').DataTable().destroy();
    }
    if ($.fn.DataTable.isDataTable('#actividadesRuralesConDificultad')) {
        $('#actividadesRuralesConDificultad').DataTable().destroy();
    }
    

    $(document).ready(function() {
        $('#actividadesRuralesConDificultad').DataTable({
            "paging": true,      // Habilitar paginación
            "pageLength": 25,    // Número de filas por página
            "lengthMenu": [10, 25, 50],  // Opciones de cantidad de filas por página
            "ordering": true,    // Habilitar ordenamiento por columnas
            "searching": true,   // Habilitar búsqueda
            "info": true         // Mostrar información de la tabla (por ejemplo, "Mostrando 1 a 10 de 20 entradas")
        });
    });

    // Mostrar la tabla de actividades urbanas con dificultad
    
    actividadesRuralesConDificultadTable.style.display = 'table';
}