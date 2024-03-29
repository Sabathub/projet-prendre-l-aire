<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200127110745 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE area DROP FOREIGN KEY FK_D7943D688E4F209D');
        $this->addSql('DROP INDEX IDX_D7943D688E4F209D ON area');
        $this->addSql('ALTER TABLE area DROP highway_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE area ADD highway_id INT NOT NULL');
        $this->addSql('ALTER TABLE area ADD CONSTRAINT FK_D7943D688E4F209D FOREIGN KEY (highway_id) REFERENCES highway (id)');
        $this->addSql('CREATE INDEX IDX_D7943D688E4F209D ON area (highway_id)');
    }
}
