import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: string;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: [ 'insert', 'update']
       })
    @JoinColumn({ name: 'orphanage_id' })
    images: [Image];

}

/* Essa linha "strictPropertyInitialization": false, no tsconfig.json, mudou de True para False para nao corrigir as classes nesse arquivo Orphanages.ts */