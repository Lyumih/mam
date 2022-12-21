namespace $.$$ {
	const URL = 'https://mol.hyoo.ru/go'
	const hash = ( s: string ) => {
		return s.split( "" ).reduce( function( a, b ) { a = ( ( a << 5 ) - a ) + b.charCodeAt( 0 ); return a & a }, 0 )
	}
	export class $link_link extends $.$link_link {
		urlLink() {
			return `${ URL }/${ hash( this.link() ) }`
		}
	}
}
