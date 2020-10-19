import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanege';

@Entity('Images')
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images )
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;    
}

/* Essa linha "strictPropertyInitialization": false, no tsconfig.json, mudou de True para False para nao corrigir as classes nesse arquivo Orphanages.ts */